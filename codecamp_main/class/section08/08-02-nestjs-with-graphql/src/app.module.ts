import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardsModule } from './apis/boards/boards.module';

@Module({
  imports: [
    BoardsModule, // 모듈들을 앱모듈에서 합치기
    // ProductsModule,
    // UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // 스키마가 해당 경로로 자동 생성됨(code-first)
    }),
  ],
})
export class AppModule {}
