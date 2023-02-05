import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MainCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 10,
  })
  name: string;
}
