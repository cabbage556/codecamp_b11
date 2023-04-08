import { CreateBoardInput } from '../dto/create-board.input';

// i + boardService + create
export interface IBoardsServiceCreate {
  createBoardInput: CreateBoardInput;
}
