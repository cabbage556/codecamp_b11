import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { AuthGuard } from '@nestjs/passport';
import { IContext } from 'src/commons/interfaces/context';
import { gqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  // @UseGuards(AuthGuard('myAuth')) // REST-API 인가 과정 실행
  @UseGuards(gqlAuthGuard('access')) // GraphQL 인가 과정 실행
  @Query(() => String)
  fetchUser(
    @Context() context: IContext, //
  ): string {
    // 유저 정보 꺼내오기
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');
    console.log('context.req.user in fetchUser');
    console.log(context.req.user); // 유저ID
    console.log('📌📌📌📌📌📌📌📌📌📌📌📌📌');

    return '인가에 성공하였습니다.';
  }

  @Mutation(() => User) // User에 @ObjectType, @Field 작성해야함!
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({
      name: 'age', //  // gql 매개변수명
      type: () => Int, // 매개변수 타입 지정
    })
    age: number,
  ): Promise<User> {
    return this.usersService.create({ name, password, email, age });
  }
}
