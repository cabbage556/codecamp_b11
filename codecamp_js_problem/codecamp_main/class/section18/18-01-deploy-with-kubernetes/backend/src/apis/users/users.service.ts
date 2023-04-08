import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceCreate,
  IUsersServiceFindOneByEmail,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}

  findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async create({
    name,
    password,
    email,
    age,
  }: IUsersServiceCreate): Promise<User> {
    const user = await this.findOneByEmail({ email });

    // 같은 이메일로 이미 가입한 사람인지 확인
    // if (user) throw new HttpException('이미 등록된 이메일', HttpStatus.CONFLICT);
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    // 솔트 해시 작업이 오래 걸리므로 await로 대기
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usersRepository.save({
      email,
      password: hashedPassword,
      name,
      age,
    });
  }
}
