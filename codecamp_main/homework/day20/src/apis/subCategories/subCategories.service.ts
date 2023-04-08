import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/subCategory.entity';
import { ISubCategoriesServiceCreate } from './interfaces/subCategories-service.interface';

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoriesRepository: Repository<SubCategory>, //
  ) {}

  async create({
    createSubCategoryInput,
  }: ISubCategoriesServiceCreate): Promise<SubCategory> {
    const { name, mainCategoryId } = createSubCategoryInput;

    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`createSubCategoryInput: ${name} ${mainCategoryId}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const subCategory = await this.subCategoriesRepository.save({
      name,
      mainCategory: {
        id: mainCategoryId,
      },
    });

    return subCategory;
  }
}
