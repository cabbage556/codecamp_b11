import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Image } from 'src/apis/images/entities/image.entity';
import { Payment } from 'src/apis/payments/entities/payment.entity';
import { SubCategory } from 'src/apis/subCategories/entities/subCategory.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({
    length: 30,
  })
  @Field(() => String)
  name: string;

  @Column({
    type: 'decimal',
    precision: 4,
    scale: 1,
  })
  @Field(() => Float)
  kcal: number;

  @Column({
    type: 'decimal',
    precision: 4,
    scale: 1,
  })
  @Field(() => Float)
  protein: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
  })
  @Field(() => Float)
  fat: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
  })
  @Field(() => Float)
  sugar: number;

  @Column()
  @Field(() => Int)
  price: number;

  @ManyToOne(() => SubCategory)
  @Field(() => SubCategory, { nullable: true })
  subCategory: SubCategory;

  @JoinTable({
    name: 'product_payment',
  })
  @ManyToMany(() => Payment, (payments) => payments.products)
  @Field(() => [Payment], { nullable: true })
  payments: Payment[];

  @OneToMany(() => Image, (images) => images.product)
  @Field(() => [Image])
  images: Image[];

  @DeleteDateColumn()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
