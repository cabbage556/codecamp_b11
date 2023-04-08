import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import {
  IAuthServiceGetAccessToken,
  IAuthServiceLogin,
  IAuthServiceRestoreAccessToken,
  IAuthServiceSetRefreshToken,
} from './interfaces/auth-service.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, // jwtService 의존성 주입
    private readonly usersService: UsersService, //
  ) {}

  async login({
    email,
    password,
    context,
  }: IAuthServiceLogin): Promise<string> {
    // 1. 이메일 일치 유저 DB에서 찾기
    const user = await this.usersService.findOneByEmail({ email });

    // 2. 이메일 일치 유저가 없으면 에러 던지기
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다.');

    // 3. 일치하는 유저가 있지만 비밀번호가 틀렸다면?
    // 매개변수1: 입력패스워드, 매개변수2: 암호화된패스워드
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('암호가 틀렸습니다.');

    // 4. refreshToken(=JWT)을 만들어 브라우저 쿠키에 저장해서 전달(응답 헤더)
    this.setRefreshToken({ user, context });

    // 5. 일치하는 유저가 있고, 비밀번호도 맞았다면?
    //    => accessToken(=JWT)을 만들어 브라우저에 전달(응답 바디)
    return this.getAccessToken({ user });
  }

  // 액세스토큰 재발급
  restoreAccessToken({ user }: IAuthServiceRestoreAccessToken): string {
    return this.getAccessToken({ user });
  }

  setRefreshToken({ user, context }: IAuthServiceSetRefreshToken): void {
    // 리프레시토큰 생성
    // 리프레시토큰도 만료되면? 다시 로그인 요구하기
    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: '나의리프레시비밀번호', expiresIn: '2w' }, // secret은 env 파일로 빼기
    );

    // 📌📌📌개발환경에서만📌📌📌
    // 리프레시토큰을 브라우저에 전달(응답 헤더)
    // 바디를 리턴할 때 같이 딸려 나가기 때문에 리턴할 필요가 없다.
    context.res.setHeader(
      'set-Cookie',
      `refreshToken=${refreshToken}; path=/;`,
    );

    // 📌📌📌배포환경에서는?📌📌📌
    // context.res.setHeader('set-Cookie', `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly`, );
    // context.res.setHeader( 'Access-Control-Allow-Origin', 'https://myfrontsite.com'); // 이 프론트주소에서만 쿠키를 주고받을 수 있게 한다.
  }

  // 액세스 토큰 발급을 위해 별도 메서드로 빼놓음
  getAccessToken({ user }: IAuthServiceGetAccessToken): string {
    return this.jwtService.sign(
      { sub: user.id }, // 페이로드
      { secret: '나의비밀번호', expiresIn: '1h' }, //
      // { secret: '나의비밀번호', expiresIn: '20s' }, // 테스트
    );
  }
}
