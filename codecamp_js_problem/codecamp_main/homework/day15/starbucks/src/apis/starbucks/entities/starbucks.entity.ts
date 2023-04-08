import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Starbucks {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  kcal: number;

  @Column()
  @Field(() => Int)
  fat: number;

  @Column()
  @Field(() => Int)
  protein: number;

  @Column()
  @Field(() => Int)
  salt: number;

  @Column()
  @Field(() => Int)
  sugar: number;

  @Column()
  @Field(() => Int)
  caffeine: number;
}
