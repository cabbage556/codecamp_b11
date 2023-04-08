import { Injectable, Scope } from '@nestjs/common';
import { Starbucks } from './entities/starbucks.entity';
import { IStarbucksServiceCreate } from './interfaces/starbucks-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class StarbucksService {
  fetchStarbucks(): Starbucks[] {
    const result = [
      {
        id: 1,
        name: '아메키라노',
        price: 5000,
        kcal: 5,
        fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 50,
      },
      {
        id: 2,
        name: '투메키라노',
        price: 6000,
        kcal: 5,
        fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 100,
      },
      {
        id: 3,
        name: '쓰리메키라노',
        price: 7000,
        kcal: 5,
        fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 150,
      },
      {
        id: 4,
        name: '포메키라노',
        price: 8000,
        kcal: 5,
        fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 200,
      },
      {
        id: 5,
        name: '파이브메키라노',
        price: 9000,
        kcal: 5,
        fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 250,
      },
    ];
    return result;
  }

  createStarbucks({ createStarbucksInput }: IStarbucksServiceCreate): string {
    console.log(createStarbucksInput);
    return '등록에 성공하였습니다.';
  }
}
