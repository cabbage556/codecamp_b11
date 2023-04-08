import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, // 서비스 의존성 주입
  ) {}

  @Mutation(() => String)
  login(
    @Args('email') email: string, //
    @Args('password') password: string, //
    @Context() context: IContext, //
  ): Promise<string> {
    // context의 res의 쿠키에 리프레시토큰을 담아 보낸다.
    return this.authService.login({ email, password, context });
  }
}
