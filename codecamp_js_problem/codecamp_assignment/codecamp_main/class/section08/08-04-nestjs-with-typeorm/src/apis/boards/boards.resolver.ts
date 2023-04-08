import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, // 주석으로 prettier 적용 못하게 하기
  ) {}

  // graphql 리턴 타입(대문자)
  // nullable: 있어도 되고 없어도 됨(필수가 아니라는 것)
  @Query(() => String, { nullable: true })
  fetchBoards(): string {
    return this.boardsService.getHelloWorld();
  }
}
