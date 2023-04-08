import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
}
