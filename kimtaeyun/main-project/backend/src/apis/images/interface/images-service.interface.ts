import { CreateImageInput } from '../dto/create-image.input';
import { Image } from '../entities/image.entity';

export interface IImagesServiceCreate {
  createImageInput: CreateImageInput;
}

export interface IImagesServiceCreateMany {
  urls: string[];
  productId: string;
}

export interface IImagesServiceDeleteByProductId {
  productId: string;
}

export interface IImagesServiceDeleteAllAndCreateMany {
  urls: string[];
  productId: string;
}

export interface IImagesServiceFindAllByProductId {
  productId: string;
}

export interface Url {
  [key: string]: number;
}

export interface IImagesServiceGetUrlObj {
  urls: string[];
  images: Image[];
}

export interface IImagesServiceCreateNonExistingImages {
  urlObj: Url;
  productId: string;
}

export interface IImagesServiceDeleteImageInBucket {
  urls: string[];
}

export interface IImagesServiceDeleteImagesByUrls {
  urlObj: Url;
}

export interface IImagesServiceFilterImagesAndCreate {
  urls: string[];
  productId: string;
}
