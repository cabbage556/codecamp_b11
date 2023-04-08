import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { ProductTag } from '../productsTags/entities/productTag.entity';
import { ProductsTagsService } from '../productsTags/productsTags.service';
import { Product } from './entities/product.entity';
import { ProductSubscriber } from './entities/product.subscriber';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, // 레파지토리 의존성 주입
      ProductSaleslocation,
      ProductTag,
    ]),
  ],
  providers: [
    ProductSubscriber,
    ProductsResolver, // 서비스 의존성 주입
    ProductsService, // 의존성
    ProductsSaleslocationsService,
    ProductsTagsService,
  ],
})
export class ProductsModule {}
