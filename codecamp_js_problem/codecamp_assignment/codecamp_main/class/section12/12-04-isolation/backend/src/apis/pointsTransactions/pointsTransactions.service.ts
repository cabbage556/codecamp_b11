import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
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

    private readonly dataSource: DataSource, // typeorm의 DataSource 가져오기
  ) {}

  async create({
    impUid,
    amount,
    user: _user, // 매개변수 이름 변경하는 방법(user -> _user, 언더바 사용이 관례)
  }: IPointsTransactionsServiceCreate) {
    // : Promise<PointTransaction>
    // this.pointsTransactionsRepository.create() -> 테이블에 등록하기 위한 객체 만들기
    // this.pointsTransactionsRepository.insert() -> 테이블에 등록하지만 등록 결과를 가져오지는 못하는 방법
    // this.pointsTransactionsRepository.update() -> 테이블을 수정하지만 수정 결과를 가져오지는 못하는 방법

    // 1, 2, 3을 하나로 묶기(트랜잭션)
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect(); // DB 연결 기다리기
    await queryRunner.startTransaction(); // 트랜잭션 시작

    try {
      // 1. PointTransaction 테이블에 거래기록 1줄 생성하기
      // 1-1. create로 PointTransaction 테이블에 등록할 객체 생성
      const pointTransaction = this.pointsTransactionsRepository.create({
        impUid,
        amount,
        user: _user,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT, // 'PAYMENT'
      });
      // 1-2. create로 생성한 객체로 DB에 저장
      // await this.pointsTransactionsRepository.save(pointTransaction);
      await queryRunner.manager.save(pointTransaction); // query runner로 pointTransaction 저장(트랜잭션이 바로 종료되지 않음)

      // 트랜잭션 롤백을 위한 에러 던지기 -> catch -> finally
      // throw new Error('에러 던지기');

      // 2. 유저의 돈 찾아오기
      // const user = await this.usersRepository.findOne({
      //   where: { id: _user.id },
      // });
      const user = await queryRunner.manager.findOne(User, {
        where: { id: _user.id },
      }); // query runner로 User 테이블 조회(트랜잭션이 바로 종료되지 않음)

      // 3. 유저의 돈 업데이트 -> 거래 등록 결과를 반환하기 위해 update 사용
      // 기존에 가지고 있던 유저의 포인트와 추가한 포인트를 더해서 유저 테이블 업데이트하기
      // await this.usersRepository.update(
      //   { id: _user.id }, // update 조건 -> _user의 id
      //   { point: user.point + amount },
      // );
      const updatedUser = this.usersRepository.create({
        // query runner로 저장하기 위해 User 테이블 등록 객체 생성
        ...user,
        point: user.point + amount,
      });
      await queryRunner.manager.save(updatedUser); // query runner로 생성한 객체 저장(트랜잭션이 바로 종료되지 않음)
      await queryRunner.commitTransaction(); // query runner 트랜잭션 커밋(트랜잭션 종료)

      // 4. 최종 결과 브라우저에 응답하기
      return pointTransaction;
    } catch (error) {
      // 트랜잭션 중간에 에러가 발생하면 catch 내부 코드 실행
      await queryRunner.rollbackTransaction(); // 트랜잭션을 커밋하지 않고 롤백
    } finally {
      // try, catch 종료 시 finally 내부 코드 실행
      await queryRunner.release(); // query runner 연결 종료 -> release가 없으면 commit하더라도 커넥션 최대 갯수에 도달하여 문제가 발생함 (트랜잭션 중간에 에러가 발생하면 커넥션은 자동으로 끊김)
    }
  }
}
