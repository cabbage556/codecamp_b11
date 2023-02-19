import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { FilesModule } from './apis/files/files.module';
import { IamportModule } from './apis/iamport/iamport.module';
import { ImagesModule } from './apis/images/images.module';
import { MainCategoriesModule } from './apis/mainCategories/mainCategories.module';
import { PaymentsModule } from './apis/payments/payments.module';
import { ProductsModule } from './apis/products/products.module';
import { SubCategoriesModule } from './apis/subCategories/subCategories.module';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [
    AuthModule,
    FilesModule,
    IamportModule,
    ImagesModule,
    PaymentsModule,
    ProductsModule,
    MainCategoriesModule,
    SubCategoriesModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }),
      // req는 기본적으로 API로 들어오지만, res는 이걸 작성해야만 들어온다.
      // graphql의 request, response를 리턴 -> API에서 context로 request, response를 받을 수 있다.
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.*'], // __dirname: /Users/taeyoon/Desktop/codecamp-backend-class/homework/day18/src (파일 위치 절대 경로로 표현)
      logging: true,
      synchronize: true,
      timezone: '+09:00',
    }),
  ],
})
export class AppModule {}
