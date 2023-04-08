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
    await queryRunner.startTransaction('SERIALIZABLE'); // 트랜잭션 시작(격리 4단계)

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

      // 2. 유저의 돈 찾아서 업데이트하기(📌숫자인 경우에만 가능한 방법📌) -> 좌석과 같이 숫자가 아닌 경우에는? 직접 lock 걸기 (service2 파일 참고)
      const id = _user.id;
      await queryRunner.manager.increment(
        User, // User 테이블에서
        { id }, // 유저 id를 찾아서
        'point', // point 칼럼의 값을 찾고
        amount, // amount만큼 더한 값으로 업데이트해줘.
      );
      await queryRunner.commitTransaction(); // query runner 트랜잭션 커밋(트랜잭션 종료)

      // 3. 최종 결과 브라우저에 응답하기
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
