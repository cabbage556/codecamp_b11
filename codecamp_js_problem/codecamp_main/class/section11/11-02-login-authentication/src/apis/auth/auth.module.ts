import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({}), // AuthService에 JwtModule 주입
    UsersModule, // UsersModule 통째로 가져오기 (UsersService가 담겨 있음)
  ],
  providers: [
    AuthResolver, //
    AuthService,
  ],
})
export class AuthModule {}
