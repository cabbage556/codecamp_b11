// interface IHttpExceptionFilter {
//   qqq(): void;
// }

import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

// try-catch 직접 사용하여 잡아내지 못하는 에러와 예상치 못한 에러를 잡아주는 exception-filter(nestjs 제공)
// HttpException 관련 에러 발생 시 catch 메서드 실행하기 위해 @Catch 데코레이터 사용
// main.ts에서 등록해서 사용한다.
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // ExceptionFilter 필수 구현 메서드
  // 에러 발생 시 이 catch 메서드 사용
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('============');
    console.log('예외가 발생했어요!');
    console.log(`예외 내용: ${message}`);
    console.log(`예외 코드: ${status}`);
    console.log('============');
  }
}
