import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user: {
    name: string;
    email: string;
    hashedPassword: string;
    age: number;
  };
}

@Controller() // REST API 라우터 핸들링은 controller로 사용
export class AuthController {
  constructor(
    private readonly usersService: UsersService, //
    private readonly authService: AuthService, //
  ) {}

  @UseGuards(AuthGuard('google'))
  @Get('/login/google') // endpoint
  async loginGoogle(
    //  REST API를 사용하므로 데코레이터를 사용해 req, res를 뽑아올 수 있다.
    @Req() req: Request & IOAuthUser, // req에 유저 정보가 추가 되었으므로 & 연산자로 인터페이스 타입을 추가
    @Res() res: Response, //
  ) {
    // 프로필을 받아온 다음, 로그인 처리해야 하는 곳(ppt 8번)
    // 1. 회원조회
    let user = await this.usersService.findOne({ email: req.user.email });

    // 2. 회원가입이 안돼 있다면? 자동회원가입
    if (!user) user = await this.usersService.create({ ...req.user });

    // 3. 회원가입이 되어 있다면? 로그인(accessToken, refreshToken 만들어서 브라우저에 전송)
    // 페이지 리다이렉트를 하기 위해 accessToken은 지금 전송하지 않고, refreshToken만 응답 헤더 쿠키에 담아 전송
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/class/section11/11-06-google-login/frontend/social-login.html',
    );
  }
}
