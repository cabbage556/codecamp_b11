import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { MainCategory } from './entities/mainCategory.entity';
import { MainCategoriesService } from './mainCategories.service';

@Resolver()
export class MainCategoriesResolver {
  constructor(
    private readonly mainCategoriesService: MainCategoriesService, //
  ) {}

  @Mutation(() => MainCategory)
  createMainCategory(@Args('name') name: string): Promise<MainCategory> {
    return this.mainCategoriesService.create({ name });
  }
}
