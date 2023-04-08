import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// 서비스에서 사용할 수 있도록 export
export enum POINT_TRANSACTION_STATUS_ENUM {
  PAYMENT = 'PAYMENT',
  CANCEL = 'CANCEL',
}

// gql용으로 enum 타입 등록하기 (import 필요)
registerEnumType(POINT_TRANSACTION_STATUS_ENUM, {
  name: 'POINT_TRANSACTION_STATUS_ENUM',
});

// 일반적인 string 타입의 경우 실수하더라도 그대로 값이 담기기 때문에 enum 타입을 사용하여 정확히 enum 타입의 값만 사용할 수 있도록 한다.
// POINT_TRANSACTION_STATUS_ENUM.PAYMENT -> 'PAYMENT'
// POINT_TRANSACTION_STATUS_ENUM.CANCEL -> 'CANCEL'

@Entity()
@ObjectType()
export class PointTransaction {
  // insert only table => 추가만할뿐 수정하지 않는 테이블
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  impUid: string;

  @Column()
  @Field(() => Int)
  amount: number;

  @Column({
    type: 'enum', // MySQL에 enum 타입임을 알려줌
    enum: POINT_TRANSACTION_STATUS_ENUM, // MySQL에 어떤 enum을 사용하는지 알려줌
  })
  @Field(() => POINT_TRANSACTION_STATUS_ENUM)
  status: POINT_TRANSACTION_STATUS_ENUM; // 'PAYMENT' 또는 'CANCEL'

  @ManyToOne(() => User) // 결제 N : 유저 1, 유저 한명이 여러 거래기록을 가지고 있다.
  @Field(() => User)
  user: User;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;
}
