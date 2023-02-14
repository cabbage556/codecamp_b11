import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';
import { IPointsTransactionsServiceCreate } from './interfaces/points-transactions-service.interface';

@Injectable()
export class PointsTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointsTransactionsRepository: Repository<PointTransaction>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create({
    impUid,
    amount,
    user: _user, // 매개변수 이름 변경하는 방법(user -> _user, 언더바 사용이 관례)
  }: IPointsTransactionsServiceCreate): Promise<PointTransaction> {
    // this.pointsTransactionsRepository.create() -> 테이블에 등록하기 위한 객체 만들기
    // this.pointsTransactionsRepository.insert() -> 테이블에 등록하지만 등록 결과를 가져오지는 못하는 방법
    // this.pointsTransactionsRepository.update() -> 테이블을 수정하지만 수정 결과를 가져오지는 못하는 방법

    // 1. PointTransaction 테이블에 거래기록 1줄 생성하기
    // 1-1. create로 PointTransaction 테이블에 등록할 객체 생성
    const pointTransaction = this.pointsTransactionsRepository.create({
      impUid,
      amount,
      user: _user,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT, // 'PAYMENT'
    });
    // 1-2. create로 생성한 객체로 DB에 저장
    await this.pointsTransactionsRepository.save(pointTransaction);

    // 2. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    // 3. 유저의 돈 업데이트 -> 거래 등록 결과를 반환하기 위해 update 사용
    // 기존에 가지고 있던 유저의 포인트와 추가한 포인트를 더해서 유저 테이블 업데이트하기
    await this.usersRepository.update(
      { id: _user.id }, // update 조건 -> _user의 id
      { point: user.point + amount },
    );

    // 4. 최종 결과 브라우저에 응답하기
    return pointTransaction;
  }
}
