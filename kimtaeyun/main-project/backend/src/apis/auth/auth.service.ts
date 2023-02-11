import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
} from './interfaces/auth-service.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, //
    private readonly jwtService: JwtService, //
  ) {}

  async login({
    email,
    password,
    context,
  }: IAuthServiceLogin): Promise<string> {
    const user = await this.usersService.findOneByEmail({ email });
    if (!user)
      throw new UnprocessableEntityException('찾을 수 없는 이메일입니다!!');

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth)
      throw new UnprocessableEntityException('잘못된 비밀번호입니다!!');

    // 리프레시 토큰 생성 후 응답 헤더에 담아 전달
    this.setRefreshToken({ user, context });

    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      // 페이로드
      { sub: user.id },
      // { secret: `${process.env.TOKEN_SECRET_KEY}`, expiresIn: '1h' },
      { secret: `${process.env.TOKEN_SECRET_KEY}`, expiresIn: '1m' }, // 테스트
    );
  }

  restoreAccessToken({ user }: IAuthServiceRestoreAccessToken) {
    return this.getAccessToken({ user });
  }

  setRefreshToken({ user, context }: IAuthServiceSetRefreshToken) {
    // 리프레시 토큰 생성
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: `${process.env.REFRESH_SECRET_KEY}`, expiresIn: '2w' },
    );

    // 📌📌📌개발환경에서만📌📌📌
    // 리프레시토큰을 브라우저에 전달(응답 헤더)
    context.res.setHeader(
      'set-Cookie',
      `refreshToken=${refreshToken}; path=/;`,
    );
  }
}
