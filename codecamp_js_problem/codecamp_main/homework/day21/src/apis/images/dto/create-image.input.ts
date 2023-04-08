import { Field, InputType, OmitType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { Image } from '../entities/image.entity';

@InputType()
export class CreateImageInput extends OmitType(
  Image,
  ['id', 'product'],
  InputType,
) {
  @Field(() => String)
  productId: string;
}

// @InputType()
// export class CreateImageInput {
//   @Field(() => String)
//   url: string;

//   @Field(() => Boolean)
//   isMain: boolean;

//   @Field(() => String)
//   productId: string;
// }
