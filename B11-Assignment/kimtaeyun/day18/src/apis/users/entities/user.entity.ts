import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 20,
  })
  name: string;

  @Column({
    length: 25,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'char',
    length: 11,
  })
  phone: string;

  @Column({
    length: 30,
  })
  address: string;

  @Column({
    length: 20,
  })
  detailAddress: string;

  @Column({
    length: 30,
  })
  latestAddress: string;

  @Column({
    length: 20,
  })
  latestDetailAddress: string;
}
