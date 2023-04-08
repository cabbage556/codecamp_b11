import { Injectable, Scope } from '@nestjs/common';

// injection-scope => 싱글톤(new 한번)으로 할래 말래?(Scope.DEFAULT: 싱글톤, Scope.REQUEST: 요청마다 new, Scope.TRANSIENT: 주입마다 new)
// 디폴트: 싱글톤 => @Injectable() 생략 가능
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  getHelloWorld(): string {
    return 'Hello World!';
  }
}
