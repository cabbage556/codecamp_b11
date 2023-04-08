import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointsTransactionsResolver } from './pointsTransactions.resolver';
import { PointsTransactionsService } from './pointsTransactions.service';
import { PointTransaction } from './entities/pointTransaction.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PointTransaction, //
      User, // pointsTransactionsService에서 리포지토리를 사용하기 위해 의존성 주입
    ]),
  ],
  providers: [
    PointsTransactionsResolver, //
    PointsTransactionsService,
  ],
})
export class PointsTransactionsModule {}
