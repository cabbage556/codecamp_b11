import { InputType, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';

@InputType()
export class ProductSaleslocationInput extends OmitType(
  ProductSaleslocation, // ProductSaleslocation 엔티티를 상속해서 gql input type을 생성한다.
  ['id'], // 단, id 값을 제외한다. => OmitType
  InputType, // ObjectType의 ProductSaleslocation을 InputType으로 변환한다.
) {}
