import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>,

    private readonly dataSource: DataSource,
  ) {}

  async create({ amount }) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ UNCOMMITTED');
    try {
      const payment = this.paymentsRepository.create({ amount });
      await queryRunner.manager.save(payment); // 1️⃣임시 저장

      setTimeout(async () => {
        await queryRunner.rollbackTransaction(); // 2️⃣5초 뒤에 특정 이유로 실패함!!!
      }, 5000);
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
  }

  async findAll() {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction('READ UNCOMMITTED');
    try {
      // 3️⃣만약 5초 이내에 조회하면, 위에서 등록한 금액(커밋되지 않은 금액)이 조회됨(⭐️dirty-read⭐️)
      const payment = await queryRunner.manager.find(Payment);
      await queryRunner.commitTransaction();
      return payment;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
  }
}
