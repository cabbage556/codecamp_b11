import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
  ) {}

  @Query(() => Product, { nullable: true })
  fetchProduct(
    @Args('productId') productId: string, //
  ): Promise<Product> {
    return this.productsService.findOne({ productId });
  }

  @Query(() => [Product], { nullable: true })
  fetchProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query(() => [Product])
  fetchProductsWithDeleted(): Promise<Product[]> {
    return this.productsService.findAllWithDeleted();
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput, //
  ): Promise<Product> {
    return this.productsService.create({ createProductInput });
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('productId') productId: string, //
    @Args('updateProductInput') updateProductInput: UpdateProductInput, //
  ): Promise<Product> {
    return this.productsService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ): Promise<boolean> {
    return this.productsService.delete({ productId });
  }

  @Mutation(() => Boolean)
  restoreProduct(
    @Args('productId') productId: string, //
  ): Promise<boolean> {
    return this.productsService.restore({ productId });
  }
}
