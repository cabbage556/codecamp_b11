import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { AuthService } from './auth.service';
import { gqlAuthGuard } from './guards/gql-auth.guard';

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
    return this.authService.login({ email, password, context });
  }

  @UseGuards(gqlAuthGuard('refresh')) // 1. refreshToken 인가
  @Mutation(() => String)
  restoreAccessToken(
    @Context() context: IContext, //
  ): string {
    // 2. 인가 성공 시 accessToken 재발급
    return this.authService.restoreAccessToken({ user: context.req.user });
  }
}
