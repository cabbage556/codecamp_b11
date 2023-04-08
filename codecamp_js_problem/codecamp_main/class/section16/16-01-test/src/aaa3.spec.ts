import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController], // nestjs 모듈 방식을 따라 의존성 주입 가능
      providers: [AppService], //
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World! 를 리턴해야 함!', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  // describe('fetchBoards 테스트하기', () => {});

  // describe('createBoard 테스트하기', () => {});
});
