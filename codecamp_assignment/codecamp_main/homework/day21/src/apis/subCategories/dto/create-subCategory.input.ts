import { Field, InputType, OmitType } from '@nestjs/graphql';
import { SubCategory } from '../entities/subCategory.entity';

@InputType()
export class CreateSubCategoryInput extends OmitType(
  SubCategory,
  ['id', 'mainCategory'],
  InputType,
) {
  @Field(() => String)
  mainCategoryId: string;
}

// @InputType()
// export class CreateSubCategoryInput {
//   @Field(() => String)
//   name: string;

//   @Field(() => String)
//   mainCategoryId: string;
// }
