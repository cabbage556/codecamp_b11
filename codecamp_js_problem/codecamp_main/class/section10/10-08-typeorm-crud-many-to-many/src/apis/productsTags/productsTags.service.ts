import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, InsertResult, Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import {
  IProductsTagsServiceBulkInsert,
  IProductsTagsServiceFindByNames,
} from './interfaces/products-tags-service.interface';

@Injectable()
export class ProductsTagsService {
  constructor(
    @InjectRepository(ProductTag)
    private readonly productsTagsRepository: Repository<ProductTag>, //
  ) {}

  async findByNames({ tagNames }: IProductsTagsServiceFindByNames) {
    const result = await this.productsTagsRepository.find({
      where: { name: In(tagNames) },
    });

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`find result after findByNames`);
    console.dir(result);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    return result;
  }

  bulkInsert({ names }: IProductsTagsServiceBulkInsert): Promise<InsertResult> {
    return this.productsTagsRepository.insert([...names]);
  }
}
