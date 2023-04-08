import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({
    type: 'char',
    length: 200,
  })
  @Field(() => String)
  name: string;

  @Column({
    length: 100,
  })
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation) // 1:1 관계인 상품거래위치 테이블과 연결
  @Field(() => ProductSaleslocation) // gql type
  productSaleslocation: ProductSaleslocation;

  // N:1 관계인 상품카테고리 테이블과 연결 (N-상품 테이블, 1-상품카테고리 테이블)
  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  // N:1 관계인 유저 테이블과 연결 (N-상품 테이블, 1-유저 테이블)
  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  // N:M 관계인 상품태그 테이블과 연결
  @JoinTable() // @ManyToMany 관계에서 한쪽에 추가해야함
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[];
}
