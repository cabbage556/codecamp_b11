import {
  HttpException,
  HttpStatus,
  Injectable,
  Scope,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
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

  async update(
    { productId, updateProductInput }: IProductsServiceUpdate, //
  ): Promise<Product> {
    // 아래 코드와 같은 역할
    // 기존 로직을 재사용하여 로직을 통일한다.
    const product = await this.findOne({ productId });

    // 검증은 서비스에서 처리하는 것이 좋다.
    this.checkSoldout({ product });

    // save 메서드에 값을 전달하기 위해 먼저 상품을 가져온다.
    // const product = await this.productsRepository.findOne({
    //   where: { id: productId },
    // });

    // 아래 코드와 같은 역할
    // 재사용을 위해 checkSoldout 메서드로 빼내기
    // if (product.isSoldout) {
    //   throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    // }

    // // 판매 완료 시 업데이트를 하지 않고 예외를 던짐
    // if (product.isSoldout) {
    //   // 예외 메시지, 상태 코드 전달
    //   // 적당한 상태 코드를 선택해서 프론트엔드가 잘 알아볼 수 있도록 한다.
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY, // 422
    //   );
    // }

    // DB 접속과 관련 없는 메서드
    // 등록을 위해 빈 껍데기 객체를 생성하는 역할을 함
    // this.productsRepository.create;

    // insert, update는 등록한 내용을 다시 가져오지 않는다.
    // 등록 내용을 다시 돌려주지 않아도 되면 사용할 수 있다.
    // 결과를 객체로 돌려 받지 못하는 등록 방법
    // this.productsRepository.insert();
    // 결과를 객체로 돌려 받지 못하는 수정 방법
    // this.productsRepository.update();

    // 업데이트도 save() 메서드 사용 가능
    // save는 등록 / 수정이 가능하다.
    // save의 매개변수에 id가 존재하면 수정하는 것이다.
    // save의 매개변수에 id가 존재하지 않으면 등록하는 것이다.

    // save는 등록한 내용을 다시 가져오기 때문에 쉽게 반환할 수 있다.
    // 다시 Query 호출을 하지 않아도 된다는 장점이 있다.
    // 하지만 모든 내용을 다시 가져오는 것은 아니고, 등록한 내용에 대해서만 다시 가져온다.
    const result = this.productsRepository.save({
      // 기존에 입력된 데이터로 다시 저장한다.
      // 수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을 때 사용하는 코드
      // save 메서드가 등록한 내용에 대해서만 다시 가져오기 때문이다.
      // id: product.id,
      // isSoldout: product.isSoldout,
      // name: product.name,
      // description: product.description,
      // price: product.price
      ...product, // 스프레드

      // update 요청 시 입력 받은 데이터로 수정한다.
      // name: updateProductInput.name,
      // description: updateProductInput.description,
      // price: updateProductInput.price,
      ...updateProductInput, // 스프레드
    });

    return result;
  }

  // checkSoldout을 메서드로 만드는 이유
  // => 수정, 삭제 시 같은 검증 로직을 사용하므로 재사용을 위해
  checkSoldout({ product }: IProductsServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }
}
