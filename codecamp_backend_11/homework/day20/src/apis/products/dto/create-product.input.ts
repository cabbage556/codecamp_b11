import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Min(0)
  @Field(() => Float)
  kcal: number;

  @Min(0)
  @Field(() => Float)
  protein: number;

  @Min(0)
  @Field(() => Float)
  fat: number;

  @Min(0)
  @Field(() => Float)
  sugar: number;

  // 검증 로직 확인을 위해 @Min(0)를 사용하지 않음
  @Field(() => Int)
  price: number;

  @Field(() => String)
  subCategoryId: string;
}
