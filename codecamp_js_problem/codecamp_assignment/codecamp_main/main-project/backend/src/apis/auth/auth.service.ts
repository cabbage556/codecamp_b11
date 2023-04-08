import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceLogout,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
  IAuthServiceSocialLogin,
  IAuthServiceTokenSaveInRedis,
  IAuthServiceVerifyToken,
} from './interfaces/auth-service.interface';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  redirect = 'http://localhost:5500/main-project/frontend/login/index.html';

  constructor(
    private readonly usersService: UsersService, //
    private readonly jwtService: JwtService, //
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache, //
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
      { secret: process.env.TOKEN_SECRET_KEY, expiresIn: '1h' },
      // { secret: process.env.TOKEN_SECRET_KEY, expiresIn: '1m' }, // 테스트
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
      { secret: process.env.REFRESH_SECRET_KEY, expiresIn: '1d' },
    );

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`refreshToken - ${refreshToken}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    // 📌📌📌개발환경에서만📌📌📌
    // 리프레시토큰을 브라우저에 전달(응답 헤더)
    res.setHeader('set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  async saveTokenInRedis({
    token,
    tokenResult,
    isAccessToken,
  }: IAuthServiceTokenSaveInRedis): Promise<void> {
    const key = isAccessToken ? 'accessToken' : 'refreshToken';
    await this.cacheManager.set(
      `${key}:${token}`, // key
      key, // value
      { ttl: tokenResult['exp'] - Math.trunc(new Date().valueOf() / 1000) }, // ttl = 토큰만료시간(초) - 현재시간(초)
    );
  }

  verifyToken({
    token,
    secretKey,
  }: IAuthServiceVerifyToken): string | jwt.JwtPayload {
    try {
      const tokenResult = jwt.verify(token, secretKey);
      return tokenResult;
    } catch (error) {
      console.error('😡😡😡토큰검증실패😡😡😡');
      throw new UnauthorizedException();
    }
  }

  async logout({ req }: IAuthServiceLogout): Promise<string> {
    const accessToken = req.headers.authorization.replace('Bearer ', '');
    const refreshToken = req.headers.cookie.replace('refreshToken=', '');

    // 액세스토큰, 리프레시토큰 유효성 검증하기
    const accTokenResult = this.verifyToken({
      token: accessToken,
      secretKey: process.env.TOKEN_SECRET_KEY,
    });
    const refTokenResult = this.verifyToken({
      token: refreshToken,
      secretKey: process.env.REFRESH_SECRET_KEY,
    });

    // 로그아웃 시 사용한 액세스토큰, 리프레시토큰 레디스에 저장하기
    await this.saveTokenInRedis({
      token: accessToken,
      tokenResult: accTokenResult,
      isAccessToken: true,
    });
    await this.saveTokenInRedis({
      token: refreshToken,
      tokenResult: refTokenResult,
      isAccessToken: false,
    });

    return '로그아웃에 성공했습니다.';
  }
}
