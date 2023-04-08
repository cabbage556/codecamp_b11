import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PAYMENT_STATUS_ENUM {
  PAYMENT = 'PAYMENT',
  CANCEL = 'CANCEL',
}

registerEnumType(PAYMENT_STATUS_ENUM, {
  name: 'PAYMENT_STATUS_ENUM',
});

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @Column({
    type: 'enum', // MySQL에 enum 타입임을 명시
    enum: PAYMENT_STATUS_ENUM, // enum 타입 이름
  })
  @Field(() => PAYMENT_STATUS_ENUM)
  status: PAYMENT_STATUS_ENUM;

  // @Column({
  //   length: 10,
  // })
  // @Field(() => String)
  // paymentMethod: string;

  @ManyToMany(() => Product, (products) => products.payments)
  @Field(() => [Product])
  products: Product[];

  // 연결의 중심이 결제 테이블 => 결제 테이블에 상품id(FK)가 존재한다.
  // 결제 입장에서 상품과의 관계가 1 대 1이다.
  // @JoinColumn()
  // @OneToOne(() => Product, (product) => product.payment)  // 한쪽에만 사용할 수도 있다. (양쪽도 가능)
  // @Field(() => Product)
  // product: Product;

  @ManyToOne(() => User) // 결제 N : 유저 1, 유저 한명이 여러 거래기록을 가지고 있다.
  @Field(() => User)
  user: User;
}
