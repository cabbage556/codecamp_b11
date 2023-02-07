import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckPrice,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interface/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: {
        id: productId,
      },
    });
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  create({ createProductInput }: IProductsServiceCreate) {
    const result = this.productsRepository.save({
      ...createProductInput,
    });

    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    this.checkPrice({ updateProductInput });

    const product = await this.findOne({ productId });

    const result = this.productsRepository.save({
      ...product,
      ...updateProductInput,
    });

    return result;
  }

  checkPrice({ updateProductInput }: IProductsServiceCheckPrice) {
    if (updateProductInput.price < 0) {
      throw new UnprocessableEntityException('가격이 0보다 작을 수 없습니다.');
    }
  }
}
