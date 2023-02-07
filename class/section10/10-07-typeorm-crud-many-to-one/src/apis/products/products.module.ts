import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { Product } from './entities/product.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, // 레파지토리 의존성 주입
      ProductSaleslocation,
    ]),
  ],
  providers: [
    ProductsResolver, // 서비스 의존성 주입
    ProductsService, // 의존성
    ProductsSaleslocationsService,
  ],
})
export class ProductsModule {}
