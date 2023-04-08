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
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  totalPrice: number;

  @Column()
  paymentTime: Date;

  @Column({
    length: 10,
  })
  paymentMethod: string;

  @Column()
  isDeliveryFree: boolean;

  @ManyToMany(() => Product, (products) => products.payments)
  products: Product[];

  @ManyToOne(() => User)
  user: User;
}
