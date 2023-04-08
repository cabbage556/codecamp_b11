import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { BoardsService } from './boards.service';

@Module({
  imports: [],
  providers: [
    // 리졸버도 프로바이더에 같이 넣음
    BoardsResolver, // 주석으로 prettier 적용 못하게 하기
    BoardsService,
  ],
})
export class BoardsModule {}
