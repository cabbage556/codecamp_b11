import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
  ) {}

  @Query(() => [Product])
  fetchProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ): Promise<Product> {
    return this.productsService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    // DB와 관련된 작업은 시간이 필요한 작업이므로 Promise를 반환한다.
    // Nest는 await를 작성하지 않아도 Promise 결과를 자동으로 기다린다.

    // << 브라우저에 결과를 보내주는 2가지 방법>>
    // 1. 등록된 내용이 담긴 객체를 그대로 돌려주기
    return this.productsService.create({ createProductInput });

    // 2. 결과 메시지만 간단히 보내주기
    // return "정상적으로 상품이 등록되었습니다.";
  }
}
