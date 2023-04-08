import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 엔티티 => 테이블
@Entity()
export class Board {
  @PrimaryGeneratedColumn('increment')
  number: number;

  @Column()
  writer: string;

  @Column()
  title: string;

  @Column()
  contents: string;
}
