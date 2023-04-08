import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { BoardsService } from './boards.service';
import { CreateBoardInput } from './dto/create-board.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, // 주석으로 prettier 적용 못하게 하기

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache, //
  ) {}

  // 플레이 그라운드 API 명세서
  // graphql 리턴 타입(대문자)
  // nullable: 있어도 되고 없어도 됨(필수가 아니라는 것)
  // graphql에서 객체 배열 표현 => [객체]
  @Query(() => String, { nullable: true })
  async fetchBoards(): Promise<string> {
    // 1. 캐시 조회 연습
    const myCache = await this.cacheManager.get('qqq');
    console.log(myCache);

    // 2. 조회 완료 메세지 전달하기
    return '캐시 조회 완료';

    // 레디스 연습용 주석
    // return this.boardsService.findAll();
  }

  @Mutation(() => String)
  async createBoard(
    // graphql api 요청에서 보내준 입력 받기
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args({ name: 'contents', nullable: true }) contents: string,
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): Promise<string> {
    // 1. 캐시 등록 연습
    await this.cacheManager.set('qqq', createBoardInput, {
      ttl: 10000,
    }); // cacheManager의 경우 ttl: 10000 => 10000초로 설정 => 버전마다 바뀔 수 있으니 확인해야함

    // 2. 등록 완료 메세지 전달하기
    return '캐시 등록 완료';

    // 레디스 연습용 주석
    // return this.boardsService.create({ createBoardInput });
  }
}
