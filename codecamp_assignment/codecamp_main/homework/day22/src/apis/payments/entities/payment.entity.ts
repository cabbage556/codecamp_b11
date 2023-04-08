import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => Int)
  totalPrice: number;

  @Column()
  @Field(() => Date)
  paymentTime: Date;

  @Column({
    length: 10,
  })
  @Field(() => String)
  paymentMethod: string;

  @Column()
  @Field(() => Boolean)
  isDeliveryFree: boolean;

  @ManyToMany(() => Product, (products) => products.payments)
  @Field(() => [Product])
  products: Product[];

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
}
