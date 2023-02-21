import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  @Mutation(() => String)
  login(
    @Args('email') email: string, //
    @Args('password') password: string, //
    @Context() context: IContext, //
  ): Promise<string> {
    return this.authService.login({ email, password, res: context.res });
  }

  @UseGuards(GqlAuthGuard('refresh'))
  @Mutation(() => String)
  restoreAccessToken(
    @Context() context: IContext, //
  ): string {
    return this.authService.restoreAccessToken({ user: context.req.user });
  }

  @UseGuards(GqlAuthGuard('access'))
  @Mutation(() => String)
  async logout(
    @Context() context: IContext, //
  ): Promise<string> {
    return await this.authService.verifyToken({ req: context.req });
  }
}
