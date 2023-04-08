import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckPrice,
  IProductsServiceCreate,
  IProductsServiceDelete,
  IProductsServiceFindOne,
  IProductsServiceRestore,
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
      where: { id: productId },
      relations: ['subCategory', 'subCategory.mainCategory'], // 3 entity join
    });
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['subCategory', 'subCategory.mainCategory'], // 3 entity join
    });
  }

  findAllWithDeleted(): Promise<Product[]> {
    return this.productsRepository.find({
      withDeleted: true,
    });
  }

  create({ createProductInput }: IProductsServiceCreate) {
    const { subCategoryId, ...product } = createProductInput;

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`subCategoryId: ${subCategoryId}`);
    console.log(`product: ${product}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const result = this.productsRepository.save({
      ...product,
      subCategory: {
        id: subCategoryId,
      },
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

  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    const result = await this.productsRepository.softDelete({
      id: productId,
    });
    return result.affected ? true : false;
  }

  async restore({ productId }: IProductsServiceRestore): Promise<boolean> {
    const result = await this.productsRepository.restore({
      id: productId,
    });
    return result.affected ? true : false;
  }

  checkPrice({ updateProductInput }: IProductsServiceCheckPrice) {
    if (updateProductInput.price < 0) {
      throw new UnprocessableEntityException('가격이 0보다 작을 수 없습니다.');
    }
  }
}
