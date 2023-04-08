import { Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  // graphql 리턴 타입(대문자)
  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.starbucksService.fetchCoffeeList();
  }
}
