import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
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
    });

    return result;
  }

  async update(
    { productId, updateProductInput }: IProductsServiceUpdate, //
  ): Promise<Product> {
    // 아래 코드와 같은 역할
    // 기존 로직을 재사용하여 로직을 통일한다.
    const product = await this.findOne({ productId });

    // 검증은 서비스에서 처리하는 것이 좋다.
    this.checkSoldout({ product });

    const result = this.productsRepository.save({
      ...product, // 스프레드
      ...updateProductInput, // 스프레드
    });

    return result;
  }

  // 📌📌📌 삭제 📌📌📌
  async delete({ productId }: IProductsServiceDelete): Promise<boolean> {
    // 1. DB에 저장된 데이터 실제 삭제
    // const result = await this.productsRepository.delete({ id: productId });
    //
    // 2. 소프트 삭제 - 직접 구현
    // isDeleted 칼럼으로 삭제 여부 판단
    // this.productsRepository.update({ id: productId }, { isDeleted: true });
    //
    // 3. 소프트 삭제 - 직접 구현
    // 삭제된 날짜와 시간 기록 - deletedAt 칼럼
    // 기본값을 null로 주고, 삭제된 날짜가 존재하면 삭제가 되었음을 판단함
    // this.productsRepository.update( { id: productId }, {deletedAt: new Date()});
    //
    // 4. 소프트 삭제 - TypeORM 제공 기능 (softRemove)
    // this.productsRepository.softRemove({ id: productId });
    // softRemove 단점 - id로만 지우기 가능
    // softRemove 장점 - 여러 id 한번에 지우기 가능
    //                - .softRemove([{id: qqq}, {id: aaa}, {id: zzz}])

    // 5. 소프트 삭제 - TypeORM 제공 기능 (softDelete)
    const result = await this.productsRepository.softDelete({ id: productId });
    // softDelete 단점 - 여러 id 한번에 지우기 불가능
    // softDelete 장점 - id가 아닌 다른 칼럼으로도 지우기 가능

    // 📌📌📌📌📌📌📌📌📌📌📌📌
    // TypeORM 제공 기능 사용 => find, findOne 메서드 사용 시 deletedAt 칼럼 조건을 작성하지 않아도 된다.

    return result.affected ? true : false;
  }

  // 검증 로직
  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }
}

interface IProductsServiceDelete {
  productId: string;
}
