import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, // jwtService 의존성 주입
    private readonly usersService: UsersService, //
  ) {}

  async login({ email, password }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일 일치 유저 DB에서 찾기
    const user = await this.usersService.findOneByEmail({ email });

    // 2. 이메일 일치 유저가 없으면 에러 던지기
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    // 3. 일치하는 유저가 있지만 비밀번호가 틀렸다면?
    // 매개변수1: 입력패스워드, 매개변수2: 암호화된패스워드
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. 일치하는 유저가 있고, 비밀번호도 맞았다면?
    //    => accessToken(=JWT)을 만들어 브라우저에 전달
    return this.getAccessToken({ user });
  }

  // 액세스 토큰 발급을 위해 별도 메서드로 빼놓음
  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id }, //
      { secret: '나의비밀번호', expiresIn: '1h' }, //
    );
  }
}
