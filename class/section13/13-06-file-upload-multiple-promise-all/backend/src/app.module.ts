import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './apis/boards/boards.module';
import { ConfigModule } from '@nestjs/config'; // npmjs.com => @nestjs/config 검색
import { ProductsModule } from './apis/products/products.module';
import { ProductsCategoriesModule } from './apis/productsCategories/productsCategories.module';
import { UsersModule } from './apis/users/users.module';
import { AuthModule } from './apis/auth/auth.module';
import { PointsTransactionsModule } from './apis/pointsTransactions/pointsTransactions.module';
import { PaymentsMoudle } from './apis/payments/payments.module';
import { FilesModule } from './apis/files/files.module';

@Module({
  imports: [
    AuthModule, // 모듈들을 앱모듈에서 합치기 (📌알파벳 순서 가독성 좋음)
    BoardsModule,
    FilesModule,
    PaymentsMoudle,
    PointsTransactionsModule,
    ProductsModule,
    ProductsCategoriesModule,
    UsersModule,
    ConfigModule.forRoot(), // process.env 보다 위에 위치해야 함
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql', // 스키마가 해당 경로로 자동 생성됨(code-first)
      context: ({ req, res }) => ({ req, res }),
      // req는 기본적으로 API로 들어오지만, res는 이걸 작성해야만 들어온다.
      // graphql의 request, response를 리턴 -> API에서 context로 request, response를 받을 수 있다.
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql', // mysql이라고 강제하기
      host: process.env.DATABASE_HOST, // localhost IP 주소 직접 입력해서 빠르게 찾기
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE, // MySQL에 먼저 같은 이름의 DB를 생성해야 함
      entities: [__dirname + '/apis/**/*.entity.*'], // 현재 위치의 apis 폴더 내부의 폴더들을 모두 순회하면서 ~~.entity.~~ 파일들을 모두 엔티티로 취급
      synchronize: true, // 엔티티와 테이블 동기화
      logging: true, // 몽구스 debug와 같음
    }),
  ],
})
export class AppModule {}
