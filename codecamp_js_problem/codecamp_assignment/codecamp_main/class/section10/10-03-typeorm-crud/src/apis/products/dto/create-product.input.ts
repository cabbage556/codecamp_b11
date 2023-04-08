import { Field, InputType, Int } from '@nestjs/graphql';

@InputType() // gql input type으로 만들기
export class CreateProductInput {
  @Field(() => String) // gql 타입
  name: string; // 타입스크립트 타입

  @Field(() => String)
  description: string;

  @Field(() => Int)
  price: number;
}
