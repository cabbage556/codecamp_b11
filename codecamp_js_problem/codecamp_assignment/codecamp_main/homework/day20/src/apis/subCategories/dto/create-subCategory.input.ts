import { Field, InputType } from '@nestjs/graphql';

// @InputType()
// export class CreateSubCategoryInput extends OmitType(
//   SubCategory,
//   ['id'],
//   InputType,
// ) {}

@InputType()
export class CreateSubCategoryInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  mainCategoryId: string;
}
