import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { GqlAuthAccessGuard } from '../auth/guards/gql-auth.guard';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  @Query(() => User)
  fetchUser(
    @Args('id') id: string, //
  ): Promise<User> {
    return this.usersService.findOne({ id });
  }

  @Query(() => [User])
  fetchUsers(): Promise<User[]> {
    return this.usersService.find();
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  fetchLoginUser(
    @Context() context: IContext, //
  ): Promise<User> {
    const id = context.req.user.id;
    return this.usersService.findLoginUser({ id });
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput, //
  ): Promise<User> {
    return this.usersService.create({ createUserInput });
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: string, //
    @Args('updateUserInput') updateUserInput: UpdateUserInput, //
  ): Promise<User> {
    return this.usersService.update({ id, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('id') id: string, //
  ): Promise<boolean> {
    return this.usersService.delete({ id });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Boolean)
  deleteLoginUser(
    @Context() context: IContext, //
  ): Promise<boolean> {
    const id = context.req.user.id;
    return this.usersService.delete({ id });
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  updateUserPwd(
    @Context() context: IContext,
    @Args('password') password: string, //
  ): Promise<User> {
    const id = context.req.user.id;
    return this.usersService.updateUserPassword({ id, password });
  }
}
