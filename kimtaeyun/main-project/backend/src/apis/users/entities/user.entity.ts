import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
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
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  phone: string;

  @Column({
    length: 30,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  address: string;

  @Column({
    length: 20,
    nullable: true,
  })
  @Field(() => String, { nullable: true })
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

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
