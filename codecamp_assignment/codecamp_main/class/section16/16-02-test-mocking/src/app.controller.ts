import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 생성자를 통해 의존성이 주입됨
  // 인터페이스 또는 클래스로 타입 지정 가능
  constructor(private readonly appService: AppService) {}

  // 괄호 안에 엔드포인트 입력 (디폴트: '/')
  @Get()
  getHello(): string {
    // 서비스의 메서드 사용
    return this.appService.getHelloWorld();
  }

  fetchBoards() {
    //
  }

  createBoard() {
    //
  }
}
