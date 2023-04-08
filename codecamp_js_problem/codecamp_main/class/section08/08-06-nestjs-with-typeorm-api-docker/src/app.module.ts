import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';
import { ConfigModule } from '@nestjs/config'; // npmjs.com => @nestjs/config 검색

@Module({
  imports: [
    BoardsModule, // 모듈들을 앱모듈에서 합치기
    // ProductsModule,
    // UsersModule,
    ConfigModule.forRoot(), // process.env 보다 위에 위치해야 함
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // 스키마가 해당 경로로 자동 생성됨(code-first)
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql', // mysql이라고 강제하기
      host: process.env.DATABASE_HOST, // localhost IP 주소 직접 입력해서 빠르게 찾기
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE, // MySQL에 먼저 같은 이름의 DB를 생성해야 함
      entities: [Board],
      synchronize: true, // 엔티티와 테이블 동기화
      logging: true, // 몽구스 debug와 같음
    }),
  ],
})
export class AppModule {}
