import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

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
