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

  @Field(() => Int)
  price: number;
}
