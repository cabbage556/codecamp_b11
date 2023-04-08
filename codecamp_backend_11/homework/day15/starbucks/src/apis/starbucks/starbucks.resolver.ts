import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStarbucksInput } from './dto/create-starbucks.input';
import { Starbucks } from './entities/starbucks.entity';
import { StarbucksService } from './starbucks.service';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  // graphql 리턴 타입(대문자)
  @Query(() => [Starbucks], { nullable: true })
  fetchStarbucks(): Starbucks[] {
    return this.starbucksService.fetchStarbucks();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ): string {
    return this.starbucksService.createStarbucks({ createStarbucksInput });
  }
}
