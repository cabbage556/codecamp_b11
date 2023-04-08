import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  // 괄호 안에 엔드포인트 입력 (디폴트: '/')
  @Get('/')
  getHello(): string {
    // 서비스의 메서드 사용
    return 'hi';
  }
}
