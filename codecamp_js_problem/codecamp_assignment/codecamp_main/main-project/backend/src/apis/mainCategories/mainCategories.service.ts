import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MainCategory } from './entities/mainCategory.entity';
import { IMainCategoriesServiceCreate } from './interfaces/mainCategories-service.interface';

@Injectable()
export class MainCategoriesService {
  constructor(
    @InjectRepository(MainCategory)
    private readonly mainCategoriesRepository: Repository<MainCategory>, //
  ) {}

  create({ name }: IMainCategoriesServiceCreate): Promise<MainCategory> {
    return this.mainCategoriesRepository.save({ name });
  }
}
