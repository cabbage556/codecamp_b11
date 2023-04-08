import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesModule } from './apis/images/images.module';
import { MainCategoriesModule } from './apis/mainCategories/mainCategories.module';
import { ProductsModule } from './apis/products/products.module';
import { SubCategoriesModule } from './apis/subCategories/subCategories.module';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [
    ProductsModule,
    MainCategoriesModule,
    SubCategoriesModule,
    ImagesModule,
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
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
      timezone: 'local',
    }),
  ],
})
export class AppModule {}
