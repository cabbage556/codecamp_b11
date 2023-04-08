import { InputType, OmitType } from '@nestjs/graphql';
import { MainCategory } from '../entities/mainCategory.entity';

@InputType()
export class CreateMainCategoryInput extends OmitType(
  MainCategory, // MainCategory 엔티티 상속해서 gql 입력 타입 구현
  ['id'], // id 값은 제외
  InputType, // InputType으로 변경
) {}
