import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, // 레파지토리 의존성 주입
    ]),
  ],
  providers: [
    ProductsResolver, // 서비스 의존성 주입
    ProductsService, // 의존성
  ],
})
export class ProductsModule {}
