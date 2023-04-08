import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // request가 글로벌 validation pipe를 거쳐서 통과한다. pipe를 정상적으로 통과한 요청만 리졸버의 api로 들어간다. (docs request lifecycle 참고)
  app.useGlobalPipes(new ValidationPipe());

  // request에 대해 HttpException 에러가 발생하면 글로벌 필터가 에러를 던진다. (docs request lifecycle 참고)
  app.useGlobalFilters(new HttpExceptionFilter());

  // gql 파일 업로드
  app.use(graphqlUploadExpress());

  await app.listen(4000); // 포트번호
}
bootstrap();
