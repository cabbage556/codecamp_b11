import { Field, InputType } from '@nestjs/graphql';

@InputType() // GraphQL 데코레이터: GraphQL의 input 키워드를 의미함
export class CreateBoardInput {
  @Field(() => String)
  writer: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;
}
