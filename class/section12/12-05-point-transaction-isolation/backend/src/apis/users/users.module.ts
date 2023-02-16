import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    UsersResolver, //
    UsersService,
  ],
  exports: [
    UsersService, // UsersModule에 UsersService를 포함시켜서 내보낸다.(AuthModule에서 사용함)
    //            // UserService에 User repository가 연결된다.
  ],
})
export class UsersModule {}
