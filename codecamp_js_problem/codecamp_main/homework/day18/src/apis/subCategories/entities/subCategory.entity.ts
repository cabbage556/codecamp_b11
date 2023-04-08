import { MainCategory } from 'src/apis/mainCategories/entities/mainCategory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 10,
  })
  name: string;

  @ManyToOne(() => MainCategory)
  mainCategory: MainCategory;
}
