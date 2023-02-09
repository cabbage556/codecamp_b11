import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { ProductsTagsService } from '../productsTags/productsTags.service';
import { Product } from './entities/product.entity';
import {
  IProductsServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceDelete,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) // Product 레파지토리 주입
    private readonly productsRepository: Repository<Product>,
    private readonly productsSaleslocationsService: ProductsSaleslocationsService,
    private readonly productsTagsService: ProductsTagsService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'], // productSaleslocation 칼럼을 join해서 가져온다.
    });
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'], // productSaleslocation 칼럼을 join해서 가져온다.
    });
  }

  async create({
    createProductInput,
  }: IProductsServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록 시 사용하는 방법
    // const result = this.productsRepository.save({ ...createProductInput });
    // return result;

    // 2. 상품과 상품 거래 위치를 같이 등록하는 방법
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput; // REST 파라미터 사용

    // 2-1. 상품 거래 위치 등록
    const result = await this.productsSaleslocationsService.create({
      productSaleslocation,
    }); // => 서비스를 타고 가야 하는 이유는?
    //  // 레파지토리에 직접 접근하면 검증 로직을 통일시킬 수 없음(서비스에서 검증 로직을 진행해야함)

    // 2-2. 상품 태그 등록
    // productTags: ['#전자제품', '#영등포', '#컴퓨터']
    const tagNames = productTags.map((el) => el.replace('#', '')); // '#' 삭제
    // tagNames: ['전자제품', '영등포', '컴퓨터']

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`tagNames: ${tagNames}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    // 이미 저장된 태그 확인
    const prevTags = await this.productsTagsService.findByNames({ tagNames });
    // prevTags: [{id: ''전자제품ID', name: '전자제품'}] => 전자제품이 등록된 태그라고 가정

    const temp = []; // [{ tag: "영등포" }, { tag: "컴퓨터" }]
    tagNames.forEach((el) => {
      const isExist = prevTags.find((prevEl) => el === prevEl.name); // prevEl: '전자제품'
      if (!isExist) temp.push({ name: el });
    });

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`temp: ${temp}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const newTags = await this.productsTagsService.bulkInsert({ names: temp }); // 📌📌📌bulk-insert는 save()로 불가능📌📌📌

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`newTags: ${JSON.stringify(newTags)}`);
    console.dir(newTags);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const tags = [...prevTags, ...newTags.identifiers]; // tags: [{id: '전자제품ID', name: '전자제품'}, {id: '컴퓨터ID', name: '컴퓨터'}, {id: '영등포ID', name: '영등포'}]
    // newTags.indentifiers 상품 태그 id 배열

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    // console.log(`tags: ${JSON.stringify(tags)}`);
    console.dir(tags);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const result2 = this.productsRepository.save({
      ...product,
      productSaleslocation: result, // result 통째로 넣기: id를 포함한 모든 값들을 한번에 반환할 수 있다.
      // id만 빼서 넣기: id 값만 반환할 수 있다.

      productCategory: {
        id: productCategoryId,
        // 카테고리 name까지 받고 싶으면?
        // => createProductInput에 name까지 포함해서 받아오기
        // => name 받아 오는 건 선택 사항
      },
      productTags: tags,
    });

    return result2;
  }

  async update(
    { productId, updateProductInput }: IProductsServiceUpdate, //
  ): Promise<Product> {
    console.log('productsService update');
    // 기존 로직을 재사용하여 로직을 통일한다.
    const product = await this.findOne({ productId });

    // const { name, description, price } = updateProductInput;
    const { productSaleslocation, productTags, ...updateInput } =
      updateProductInput;
    // const {  productSaleslocation, ...updateInput } = updateProductInput;

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`updateInput.name: ${updateInput.name}`);
    console.log(`updateInput.description: ${updateInput.description}`);
    console.log(`updateInput.price: ${updateInput.price}`);
    // console.log(`updateInput.productSaleslocation: ${productSaleslocation}`);
    console.log(`updateInput.productTags: ${productTags}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    // 검증은 서비스에서 처리하는 것이 좋다.
    this.checkSoldout({ product });

    // 숙제-1) 왜 에러가 발생하는지 고민해보기
    // 숙제-2) 에러 고쳐보기
    const result = this.productsRepository.save({
      ...product,
      ...updateInput,
      // ...updateProductInput,
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
