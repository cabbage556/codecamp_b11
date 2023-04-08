import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { IamportService } from '../iamport/iamport.service';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import {
  IPaymentsServiceCancel,
  IPaymentsServiceCreate,
  IPaymentsServiceSavePayment,
  // IPaymentsServiceFindOneCanceledPayment,
  IPaymentsServiceFindOneByImpUid,
  IPaymentsServiceCheckAlreadyCanceled,
  IPaymentsServiceCheckDuplication,
  IPaymentsServiceFindByImpUidAndUser,
  IPaymentsServiceCheckPaymentIncluded,
} from './interfaces/payments-service.interface';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>, //
    private readonly iamportService: IamportService, //
    private readonly dataSource: DataSource, //
  ) {}

  async savePayment({
    impUid,
    amount,
    user,
    status,
  }: IPaymentsServiceSavePayment): Promise<Payment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('SERIALIZABLE'); // 트랜잭션 시작

    try {
      // create로 Payment 테이블에 등록할 객체 생성
      const payment = this.paymentsRepository.create({
        impUid,
        amount,
        user,
        status,
      });

      // save로 생성한 객체 DB에 저장
      // await this.paymentsRepository.save(payment);
      await queryRunner.manager.save(payment);
      await queryRunner.commitTransaction(); // 트랜잭션 커밋

      return payment;
    } catch (error) {
      await queryRunner.rollbackTransaction(); // 트랜잭션 커밋하지 않고 롤백
    } finally {
      await queryRunner.release(); // query runner 연결 종료
    }
  }

  findOneByImpUid({
    impUid,
  }: IPaymentsServiceFindOneByImpUid): Promise<Payment> {
    return this.paymentsRepository.findOne({ where: { impUid } });
  }

  async checkDuplication({
    impUid,
  }: IPaymentsServiceCheckDuplication): Promise<void> {
    // 결제 테이블에 존재하는지 먼저 확인
    const duplication = await this.findOneByImpUid({ impUid });

    if (duplication) {
      throw new ConflictException('이미 결제 테이블에 추가되었습니다.');
    }
  }

  async create({
    impUid,
    amount,
    context,
  }: IPaymentsServiceCreate): Promise<Payment> {
    await this.iamportService.checkPayment({ impUid, amount }); // impUid 유효성 검증
    await this.checkDuplication({ impUid }); // 결제 기록 중복 여부 검증

    // Payment 테이블에 거래기록 삽입하고 반환하기
    return this.savePayment({
      impUid,
      amount,
      user: context.req.user,
      status: PAYMENT_STATUS_ENUM.PAYMENT,
    });
  }

  // findOneCanceledPayment({
  //   impUid,
  // }: IPaymentsServiceFindOneCanceledPayment): Promise<Payment> {
  //   return this.paymentsRepository.findOne({
  //     where: {
  //       impUid,
  //       status: PAYMENT_STATUS_ENUM.CANCEL,
  //     },
  //   });
  // }

  async checkPaymentIncluded({
    impUid,
  }: IPaymentsServiceCheckPaymentIncluded): Promise<void> {
    const payment = await this.findOneByImpUid({ impUid });

    if (!payment)
      throw new UnprocessableEntityException('존재하지 않는 결제입니다.');
  }

  findByImpUidAndUser({
    impUid,
    context,
  }: IPaymentsServiceFindByImpUidAndUser): Promise<Payment[]> {
    return this.paymentsRepository.find({
      where: {
        impUid,
        user: context.req.user,
      },
    });
  }

  checkAlreadyCanceled({
    payments,
  }: IPaymentsServiceCheckAlreadyCanceled): void {
    const canceledPayments = payments.filter(
      (payment) => payment.status === PAYMENT_STATUS_ENUM.CANCEL,
    );

    if (canceledPayments.length)
      throw new ConflictException('이미 취소된 결제입니다.');
  }

  async cancel({ impUid, context }: IPaymentsServiceCancel): Promise<Payment> {
    await this.checkPaymentIncluded({ impUid }); // 결제 기록 존재 여부 검증
    const payments = await this.findByImpUidAndUser({ impUid, context }); // impUid와 유저 정보로 결제 기록 가져오기
    this.checkAlreadyCanceled({ payments }); // // 취소 여부 검증

    const canceledAmount = await this.iamportService.cancelPayment({ impUid }); // 결제 취소 요청하고 취소 금액 반환

    // Payment 테이블에 취소기록 삽입하고 반환하기
    return this.savePayment({
      impUid,
      amount: -canceledAmount,
      user: context.req.user,
      status: PAYMENT_STATUS_ENUM.CANCEL,
    });
  }
}
