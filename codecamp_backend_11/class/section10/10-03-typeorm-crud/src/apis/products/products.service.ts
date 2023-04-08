import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
} from './interfaces/products-service.interface';

@Injectable({
  scope: Scope.DEFAULT, // default: 싱글톤
  // scope: Scope.REQUEST,
  // scope: Scope.TRANSIENT,
})
export class ProductsService {
  constructor(
    @InjectRepository(Product) // Product 레파지토리 주입
    private readonly productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
    });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    // DB와 관련된 작업은 시간이 필요한 작업이므로 Promise를 반환한다.
    const result = this.productsRepository.save({
      // 스프레드 연산자로 객체 풀어서 나열하기
      ...createProductInput,

      // 하나씩 직접 나열하는 방식
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
    });

    // DB에 저장한 내용을 다시 반환한다.
    // result = {
    //   id: 자동생성된 uuid,
    //   name: "마우스",
    //   description: "좋은 마우스",
    //   price: 12000,
    // }
    return result;
  }
}
