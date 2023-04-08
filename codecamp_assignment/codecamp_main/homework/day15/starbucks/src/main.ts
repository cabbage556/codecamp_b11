import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log('서버를 실행합니다😎😎😎😎');
    console.log(process.env);
  });
}
bootstrap();
