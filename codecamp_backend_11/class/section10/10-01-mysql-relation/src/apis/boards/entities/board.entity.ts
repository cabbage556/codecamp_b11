import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // MySQL 데코레이터: 엔티티 => 테이블
@ObjectType() // GraphQL 데코레이터: GraphQL의 type 키워드를 의미함 => type Board { ... } 생성
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int) // number: Int
  number: number;

  @Column()
  @Field(() => String) // writer: String
  writer: string;

  @Column()
  @Field(() => String) // title: String
  title: string;

  @Column()
  @Field(() => String) // contents: String
  contents: string;
}
