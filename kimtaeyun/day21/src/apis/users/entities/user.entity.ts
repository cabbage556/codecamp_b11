import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({
    length: 20,
  })
  @Field(() => String)
  name: string;

  @Column({
    length: 25,
  })
  @Field(() => String)
  email: string;

  @Column()
  // @Field(() => String)
  password: string;

  @Column({
    type: 'char',
    length: 11,
  })
  @Field(() => String)
  phone: string;

  @Column({
    length: 30,
  })
  @Field(() => String)
  address: string;

  @Column({
    length: 20,
  })
  @Field(() => String)
  detailAddress: string;

  @Column({
    length: 30,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  latestAddress: string;

  @Column({
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  latestDetailAddress: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
