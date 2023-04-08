import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 생성자를 통해 의존성이 주입됨
  // 인터페이스 또는 클래스로 타입 지정 가능
  constructor(
    private readonly appService: AppService, //
  ) {}

  @Get('/qqq')
  getHello(): string {
    let sum = 0;
    for (let i = 0; i < 90000000000; i++) {
      sum += i;
    }
    return '철수 성공';
  }

  @Get('/qqq2')
  getHello2(): string {
    return '영희 성공';
  }
}
