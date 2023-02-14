import { CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

class GoogleAuthGuard extends AuthGuard('google') {}
class KakaoAuthGuard extends AuthGuard('kakao') {}
class NaverAuthGuard extends AuthGuard('naver') {}

const DYNAMIC_AUTH_GUARD = {
  google: new GoogleAuthGuard(),
  kakao: new KakaoAuthGuard(),
  naver: new NaverAuthGuard(),
};

export class DynamicAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const { social } = context.switchToHttp().getRequest().params;

    return DYNAMIC_AUTH_GUARD[social].canActivate(context);
  }
}

/*
  social login API 요청이 들어오면 @UseGuards 내부 AuthGuard의 CanActivate가 실행된다.(nestjs 제공)
  social 매개변수에 입력된 값을 AuthGuard에 넘기려면 CanActivate를 수정해야 한다.
  CanActivate를 implement하는 DynamicAuthGuard 클래스 구현

  /login/google의 경우
  @UseGuards -> DynamicAuthGuard -> canActivate -> googleAuthGuard.canActivate(context)
*/
