import {
  ConflictException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UsersService } from '../users.service';

// 나만의 DB 만들기 (실제 DB에 테스트할 수 없기 때문에)
class MockUsersRepository {
  myDB = [
    { email: 'a@a.com', password: '0000', name: '짱구', age: 8 },
    { email: 'b@b.com', password: '1234', name: '철수', age: 8 },
  ];

  findOne({ where }) {
    const users = this.myDB.filter((el) => el.email === where.email);

    if (users.length) return users[0];

    return null;
  }

  save({ email, password, name, age }) {
    this.myDB.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(async () => {
    const usersModule = await Test.createTestingModule({
      // 실제 DB로 테스트하지 않음
      // imports: [TypeOrmModule.forFeature([User])],
      // controllers: [],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        },
      ],
    }).compile();

    usersService = usersModule.get<UsersService>(UsersService);
  });
  // describe('findOneByEmail', () => {
  //   const result = usersService.findOneByEmail({ email: 'a@a.com' });

  //   // toStrictEqual: jest 객체 비교
  //   expect(result).toStrictEqual({
  //     email: 'a@a.com',
  //     name: '짱구',
  //   });
  // });

  describe('create', () => {
    it('이미 존재하는 이메일인지 검증하기!', async () => {
      const myData = {
        email: 'a@a.com',
        password: '1234',
        name: '철수',
        age: 13,
      };

      try {
        await usersService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }
    });

    it('회원 등록 잘 됐는지 검증하기!', async () => {
      const myData = {
        email: 'bbb@bbb.com',
        password: '1234',
        name: '철수',
        age: 13,
      };

      const result = await usersService.create({ ...myData });
      const { password, ...rest } = result;
      expect(rest).toStrictEqual({
        email: 'bbb@bbb.com',
        name: '철수',
        age: 13,
      });
    });
  });

  // TDD => 테스트 먼저, 개발은 나중에
  it('이메일 길이가 초과되었을 때 검증', async () => {
    const myData = {
      email: '123123213tgofdgojpogjfgmfg@bbb.com',
      password: '1234',
      name: '철수',
      age: 13,
    };

    try {
      await usersService.create({ ...myData });
    } catch (error) {
      expect(error).toBeInstanceOf(UnprocessableEntityException);
    }
  });
});
