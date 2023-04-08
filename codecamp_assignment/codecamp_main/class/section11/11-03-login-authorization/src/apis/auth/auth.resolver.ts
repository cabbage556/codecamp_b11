import { Args, Mutation, Resolver } from '@nestjs/graphql';
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
  ): Promise<string> {
    return this.authService.login({ email, password });
  }
}
