import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/create-board.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, // 주석으로 prettier 적용 못하게 하기
  ) {}

  // 플레이 그라운드 API 명세서
  // graphql 리턴 타입(대문자)
  // nullable: 있어도 되고 없어도 됨(필수가 아니라는 것)
  // graphql에서 객체 배열 표현 => [객체]
  @Query(() => [Board], { nullable: true })
  fetchBoards(): Board[] {
    return this.boardsService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    // graphql api 요청에서 보내준 입력 받기
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args({ name: 'contents', nullable: true }) contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): string {
    return this.boardsService.create({ createBoardInput });
  }
}
