import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

// @InputType()
// export class UpdateProductInput {
//   @Field(() => String, { nullable: true })
//   name?: string;

//   @Field(() => String, { nullable: true })
//   description?: string;

//   // class-validator 적용 => main.ts => app.useGlobalPipes(new ValidationPipe());
//   @Min(0) // class-validator 데코레이터 => 최소값 0 => 0 미만은 입력되지 않는다.
//   @Field(() => Int, { nullable: true })
//   price?: number;
// }

// CreateProductInput 상속
// PartialType: gql의 Partial 유틸리티타입
// Partial 사용 이유: 상품 수정 시 모든 내용을 필수적으로 수정할 필요가 없기 때문에
@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  // PartialType으로 상속 시 아래 내용들을 상속받는다.
  // name?: string;
  // description?: string;
  // price?: number;
}

// 타입스크립트: Pick => gql: PickType
// PickType(CreateProductInput, ['name', 'price']); // 뽑기
// OmitType(CreateProductInput, ['description']);   // 제외하기
// PartialType(CreateProductInput);                 // 옵셔널 처리하기
