import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategory } from './entities/subCategory.entity';
import { SubCategoriesResolver } from './subCategories.resolver';
import { SubCategoriesService } from './subCategories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubCategory, //
    ]),
  ],
  providers: [
    SubCategoriesResolver, //
    SubCategoriesService,
  ],
})
export class SubCategoriesModule {}
