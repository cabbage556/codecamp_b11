import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateSubCategoryInput } from './dto/create-subCategory.input';
import { SubCategory } from './entities/subCategory.entity';
import { SubCategoriesService } from './subCategories.service';

@Resolver()
export class SubCategoriesResolver {
  constructor(
    private readonly subCategoriesService: SubCategoriesService, //
  ) {}

  @Mutation(() => SubCategory)
  createSubCategory(
    @Args('createSubCategoryInput')
    createSubCategoryInput: CreateSubCategoryInput, //
  ): Promise<SubCategory> {
    return this.subCategoriesService.create({ createSubCategoryInput });
  }
}
