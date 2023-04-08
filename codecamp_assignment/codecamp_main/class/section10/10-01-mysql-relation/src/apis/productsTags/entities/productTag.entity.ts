import { Product } from 'src/apis/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tag: string;

  // N:M 관계인 상품 테이블과 연결
  @ManyToMany(() => Product, (products) => products.productTags)
  products: Product[];
}
