import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import { IPaymentsServiceCreate } from './interfaces/payments-service.interface';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>, //
  ) {}

  async create({
    impUid,
    amount,
    context,
  }: IPaymentsServiceCreate): Promise<Payment> {
    // 1. Payment 테이블에 거래기록 삽입하기
    // 1-1. create로 Payment 테이블에 등록할 객체 생성
    const payment = this.paymentsRepository.create({
      impUid,
      amount,
      user: context.req.user,
      status: PAYMENT_STATUS_ENUM.PAYMENT,
    });
    // 1-2. create로 생성한 객체 DB에 저장
    await this.paymentsRepository.save(payment);

    return payment;
  }
}
