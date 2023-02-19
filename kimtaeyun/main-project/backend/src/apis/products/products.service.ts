import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { Repository } from 'typeorm';
import { ImagesService } from '../images/images.service';
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
    private readonly imagesService: ImagesService, //
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

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    const { subCategoryId, urls, ...product } = createProductInput;

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`subCategoryId: ${subCategoryId}`);
    console.log(`imageUrls: ${urls}`);
    console.log(product);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const result = await this.productsRepository.save({
      ...product,
      subCategory: {
        id: subCategoryId,
      },
    });

    // 이미지 테이블에 추가하기
    this.imagesService.createMany({ urls, productId: result.id });

    return result;
  }

  async update({
    productId,
    urls,
    updateProductInput,
  }: IProductsServiceUpdate): Promise<Product> {
    this.checkPrice({ price: updateProductInput.price });

    const product = await this.findOne({ productId });
    const result = await this.productsRepository.save({
      ...product,
      ...updateProductInput,
    });

    // 1번 로직
    // this.imagesService.deleteAllAndCreateMany({ urls, productId: result.id });

    // 2번 로직
    this.imagesService.filterImagesAndCreate({ urls, productId: result.id });

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

  checkPrice({ price }: IProductsServiceCheckPrice): void {
    if (price < 0) {
      throw new UnprocessableEntityException('가격이 0보다 작을 수 없습니다.');
    }
  }
}
