import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';

@Module({
  imports: [
    BoardsModule, // 모듈들을 앱모듈에서 합치기
    // ProductsModule,
    // UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // 스키마가 해당 경로로 자동 생성됨(code-first)
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1', // localhost IP 주소 직접 입력해서 빠르게 찾기
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'myproject', // MySQL에 먼저 같은 이름의 DB를 생성해야 함
      entities: [Board],
      synchronize: true, // 엔티티와 테이블 동기화
      logging: true, // 몽구스 debug와 같음
    }),
  ],
})
export class AppModule {}
