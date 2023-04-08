import { CreateProductInput } from '../dto/create-product.input';
import { UpdateProductInput } from '../dto/update-product.input';

export interface IProductsServiceFindOne {
  productId: string;
}

export interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}

export interface IProductsServiceUpdate {
  productId: string;
  urls: string[];
  updateProductInput: UpdateProductInput;
}

export interface IProductsServiceCheckPrice {
  price: number;
}

export interface IProductsServiceDelete {
  productId: string;
}

export interface IProductsServiceRestore {
  productId: string;
}
