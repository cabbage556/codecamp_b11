import { Module } from '@nestjs/common';
import { StarbucksResolver } from './starbucks.resolver';
import { StarbucksService } from './starbucks.service';

@Module({
  imports: [],
  providers: [
    // 리졸버도 프로바이더에 같이 넣음
    StarbucksResolver,
    StarbucksService,
  ],
})
export class StarbucksModule {}
