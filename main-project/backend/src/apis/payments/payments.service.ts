import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IamportService } from '../iamport/iamport.service';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import {
  IPaymentsServiceCancel,
  IPaymentsServiceCreate,
  IPaymentsServiceCheckPaymentAdded,
  IPaymentsServiceCheckPaymentCanceled,
  IPaymentsServiceSavePayment,
  IPaymentsServiceFindOneCanceledPayment,
  IPaymentsServiceFindOneByImpUid,
} from './interfaces/payments-service.interface';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>, //
    private readonly iamportService: IamportService, //
  ) {}

  async savePayment({
    impUid,
    amount,
    user,
    status,
  }: IPaymentsServiceSavePayment): Promise<Payment> {
    // create로 Payment 테이블에 등록할 객체 생성
    const payment = this.paymentsRepository.create({
      impUid,
      amount,
      user,
      status,
    });

    // save로 생성한 객체 DB에 저장
    await this.paymentsRepository.save(payment);

    return payment;
  }

  async create({
    impUid,
    amount,
    context,
  }: IPaymentsServiceCreate): Promise<Payment> {
    // impUid 유효성 확인하기 -> impUid가 유효하지 않으면 UnprocessableEntityException
    await this.iamportService.checkImpUidIsSame({
      impUid,
    });

    // 이미 테이블에 추가된 거래기록인지 확인하기 -> 추가된 경우 ConflicException
    await this.checkPaymentAdded({ impUid });

    // Payment 테이블에 거래기록 삽입하고 반환하기
    return this.savePayment({
      impUid,
      amount,
      user: context.req.user,
      status: PAYMENT_STATUS_ENUM.PAYMENT,
    });
  }

  async cancel({ impUid, context }: IPaymentsServiceCancel): Promise<Payment> {
    // impUid 유효성 확인하기 -> impUid가 유효하지 않으면 UnprocessableEntityException
    await this.iamportService.checkImpUidIsSame({ impUid });

    // 이미 취소되었는지 확인
    await this.checkPaymentCanceled({ impUid });

    // impUid로 결제 테이블에서 금액 가져오기
    const { amount } = await this.findOneByImpUid({ impUid });

    // 결제 취소 요청하기
    await this.iamportService.requestCancelPayment({ impUid, amount });

    // Payment 테이블에 취소기록 삽입하고 반환하기
    return this.savePayment({
      impUid,
      amount: -amount,
      user: context.req.user,
      status: PAYMENT_STATUS_ENUM.CANCEL,
    });
  }

  findOneByImpUid({
    impUid,
  }: IPaymentsServiceFindOneByImpUid): Promise<Payment> {
    return this.paymentsRepository.findOne({
      where: { impUid },
    });
  }

  async findOneCanceledPayment({
    impUid,
  }: IPaymentsServiceFindOneCanceledPayment): Promise<Payment> {
    return await this.paymentsRepository.findOne({
      where: {
        impUid,
        status: PAYMENT_STATUS_ENUM.CANCEL,
      },
    });
  }

  async checkPaymentAdded({
    impUid,
  }: IPaymentsServiceCheckPaymentAdded): Promise<void> {
    // 결제 테이블에 존재하는지 먼저 확인
    const paymentData = await this.findOneByImpUid({ impUid });

    if (paymentData) {
      throw new ConflictException('이미 결제 테이블에 추가되었습니다.');
    }
  }

  async checkPaymentCanceled({
    impUid,
  }: IPaymentsServiceCheckPaymentCanceled): Promise<void> {
    // 결제 테이블에 존재하는지 먼저 확인
    const canceledPayment = await this.findOneCanceledPayment({ impUid });

    if (canceledPayment) {
      throw new UnprocessableEntityException('이미 취소된 결제입니다.');
    }
  }
}
