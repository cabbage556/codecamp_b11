import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { DynamicAuthGuard } from './guards/dynamic-auth.guard';
// import { GoogleAuthGuard } from './guards/google-auth.guard';
// import { KakaoAuthGuard } from './guards/kakao-auth.guard';
// import { NaverAuthGuard } from './guards/naver-auth.guard';
import { IOAuthUser } from './interfaces/auth-controller.interface';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  // REST API
  // :social => social 매개변수로 입력값을 받을 수 있다. => /login/google의 경우 social=google
  @Get('/login/:social')
  @UseGuards(DynamicAuthGuard) // social 값을 AuthGuard에 넘겨야 한다.
  login(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response, //
  ): void {
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log('social login in auth resolver');
    console.log(req.user);
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

    this.authService.socialLogin({ req, res });
  }

  // 소셜 로그인 리팩토링
  // @UseGuards(NaverAuthGuard)
  // @Get('naver')
  // loginNaver(
  //   @Req() req: Request & IOAuthUser, //
  //   @Res() res: Response,
  // ): void {
  //   console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
  //   console.log('loginNaver in auth resolver');
  //   console.log(req.user);
  //   console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

  //   this.authService.socialLogin({ req, res });
  // }

  // @UseGuards(KakaoAuthGuard)
  // @Get('kakao')
  // loginKakao(
  //   @Req() req: Request & IOAuthUser, //
  //   @Res() res: Response, //
  // ): void {
  //   console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');
  //   console.log('loginKakao in auth resolver');
  //   console.log(req.user);
  //   console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌');

  //   this.authService.socialLogin({ req, res });
  // }
}
