import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
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
    private readonly productsSaleslocationsService: ProductsSaleslocationsService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productSaleslocation'], // productSaleslocation 칼럼을 join해서 가져온다.
    });
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocaton'], // productSaleslocation 칼럼을 join해서 가져온다.
    });
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록 시 사용하는 방법
    // const result = this.productsRepository.save({ ...createProductInput });
    // return result;

    // 2. 상품과 상품 거래 위치를 같이 등록하는 방법
    const { productSaleslocation, ...product } = createProductInput; // REST 파라미터 사용

    const result = await this.productsSaleslocationsService.create({
      productSaleslocation,
    }); // => 서비스를 타고 가야 하는 이유는?
    //  // 레파지토리에 직접 접근하면 검증 로직을 통일시킬 수 없음(서비스에서 검증 로직을 진행해야함)

    const result2 = this.productsRepository.save({
      ...product,
      productSaleslocation: result, // result 통째로 넣기: id를 포함한 모든 값들을 한번에 반환할 수 있다.
      // id만 빼서 넣기: id 값만 반환할 수 있다.
    });

    return result2;
  }

  async update(
    { productId, updateProductInput }: IProductsServiceUpdate, //
  ): Promise<Product> {
    // 기존 로직을 재사용하여 로직을 통일한다.
    const product = await this.findOne({ productId });

    // 검증은 서비스에서 처리하는 것이 좋다.
    this.checkSoldout({ product });

    const result = this.productsRepository.save({
      ...product,
      ...updateProductInput,
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
