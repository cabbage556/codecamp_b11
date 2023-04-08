import { Payment } from 'src/apis/payments/entities/payment.entity';
import { SubCategory } from 'src/apis/subCategories/entities/subCategory.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 30,
  })
  name: string;

  @Column({
    type: 'decimal',
    precision: 4,
    scale: 1,
  })
  kcal: number;

  @Column({
    type: 'decimal',
    precision: 4,
    scale: 1,
  })
  protein: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
  })
  fat: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
  })
  sugar: number;

  @Column()
  price: number;

  @ManyToOne(() => SubCategory)
  subCategory: SubCategory;

  @JoinTable()
  @ManyToMany(() => Payment, (payments) => payments.products)
  payments: Payment[];
}
