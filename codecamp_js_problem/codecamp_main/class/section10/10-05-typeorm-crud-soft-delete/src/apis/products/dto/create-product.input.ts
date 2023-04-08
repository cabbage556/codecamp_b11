import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType() // gql input type으로 만들기
export class CreateProductInput {
  @Field(() => String) // gql 타입
  name: string; // 타입스크립트 타입

  @Field(() => String)
  description: string;

  // class-validator 적용 => main.ts => app.useGlobalPipes(new ValidationPipe());
  @Min(0) // class-validator 데코레이터 => 최소값 0 => 0 미만은 입력되지 않는다.
  @Field(() => Int)
  price: number;
}
