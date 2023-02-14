import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
  IAuthServiceSocialLogin,
} from './interfaces/auth-service.interface';

@Injectable()
export class AuthService {
  redirect = 'http://localhost:5500/main-project/frontend/login/index.html';

  constructor(
    private readonly usersService: UsersService, //
    private readonly jwtService: JwtService, //
  ) {}

  async socialLogin({ req, res }: IAuthServiceSocialLogin): Promise<void> {
    // 회원조회
    let user = await this.usersService.findOneByEmail({
      email: req.user.email,
    });

    // 회원이 없으면 자동회원가입
    if (!user)
      user = await this.usersService.create({ createUserInput: req.user });

    // 회원가입이 되어 있다면 리프레시토큰만 생성하여 응답헤더에 담아 전송
    this.setRefreshToken({ user, res });

    // 페이지 리다이렉션
    res.redirect(this.redirect);
  }

  async login({ email, password, res }: IAuthServiceLogin): Promise<string> {
    const user = await this.usersService.findOneByEmail({ email });
    if (!user)
      throw new UnprocessableEntityException('찾을 수 없는 이메일입니다!!');

    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth)
      throw new UnprocessableEntityException('잘못된 비밀번호입니다!!');

    // 리프레시 토큰 생성 후 응답 헤더에 담아 전달
    this.setRefreshToken({ user, res });

    return this.getAccessToken({ user });
  }

  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      // 페이로드
      { sub: user.id },
      { secret: `${process.env.TOKEN_SECRET_KEY}`, expiresIn: '1h' },
      // { secret: `${process.env.TOKEN_SECRET_KEY}`, expiresIn: '1m' }, // 테스트
    );
  }

  restoreAccessToken({ user }: IAuthServiceRestoreAccessToken): string {
    return this.getAccessToken({ user });
  }

  setRefreshToken({ user, res }: IAuthServiceSetRefreshToken) {
    // console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    // console.log(`context context context context`);
    // console.dir(context);
    // console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    // 리프레시 토큰 생성
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: `${process.env.REFRESH_SECRET_KEY}`, expiresIn: '2w' },
    );

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log('refreshToken in setRefreshToken');
    console.log(`${refreshToken}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    // 📌📌📌개발환경에서만📌📌📌
    // 리프레시토큰을 브라우저에 전달(응답 헤더)
    res.setHeader('set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }
}
