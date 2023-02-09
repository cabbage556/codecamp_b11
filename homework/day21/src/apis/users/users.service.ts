import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  IUsersServiceCreate,
  IUsersServiceDelete,
  IUsersServiceFindOne,
  IUsersServiceFindOneByEmail,
  IUsersServiceUpdate,
} from './interfaces/users-service.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>, //
  ) {}

  async create({ createUserInput }: IUsersServiceCreate): Promise<User> {
    const {
      name,
      email,
      password,
      phone,
      address,
      detailAddress,
      latestAddress,
      latestDetailAddress,
    } = createUserInput;

    const user = await this.findOneByEmail({ email });
    if (user) throw new ConflictException('이미 가입된 유저입니다.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const savedUser = this.usersRepository.save({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      detailAddress,
      latestAddress,
      latestDetailAddress,
    });
    return savedUser;
  }

  findOne({ id }: IUsersServiceFindOne): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  find(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneByEmail({ email }: IUsersServiceFindOneByEmail): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async update({ id, updateUserInput }: IUsersServiceUpdate): Promise<User> {
    const user = await this.findOne({ id });

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`user.name: ${user.name}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const updatedUser = await this.usersRepository.save({
      ...user,
      ...updateUserInput,
    });

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`updateUser.name: ${updatedUser.name}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    return updatedUser;
  }

  async delete({ id }: IUsersServiceDelete): Promise<boolean> {
    const deleteResult = await this.usersRepository.softDelete({ id });
    return deleteResult.affected ? true : false;
  }
}
