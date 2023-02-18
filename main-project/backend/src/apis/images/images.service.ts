import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import {
  IImagesServiceCreate,
  IImagesServiceCreateMany,
  IImagesServiceCreateNonExistingImages,
  IImagesServiceDeleteAllAndCreateMany,
  IImagesServiceDeleteByProductId,
  IImagesServiceDeleteImageInBucket,
  IImagesServiceDeleteImagesByUrls,
  IImagesServiceFilterImagesAndCreate,
  IImagesServiceFindAllByProductId,
  IImagesServiceGetUrlObj,
  Url,
} from './interface/images-service.interface';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imagesRepository: Repository<Image>, //
  ) {}

  async create({ createImageInput }: IImagesServiceCreate): Promise<Image> {
    const productId = createImageInput.productId;
    const result = await this.imagesRepository.save({
      ...createImageInput,
      product: {
        id: productId,
      },
    });
    return result;
  }

  async createMany({
    urls,
    productId,
  }: IImagesServiceCreateMany): Promise<void> {
    const images: Image[] = urls.map((url) => {
      return this.imagesRepository.create({
        isMain: false,
        url,
        product: {
          id: productId,
        },
      });
    });
    this.imagesRepository.save(images);
  }

  async deleteAllByProductId({
    productId,
  }: IImagesServiceDeleteByProductId): Promise<boolean> {
    const deleteResult = await this.imagesRepository.delete({
      product: { id: productId },
    });
    return deleteResult.affected ? true : false;
  }

  async deleteAllAndCreateMany({
    urls,
    productId,
  }: IImagesServiceDeleteAllAndCreateMany): Promise<void> {
    await this.deleteAllByProductId({ productId }); // 이미지 테이블에서 상품 id가 일치하는 데이터 모두 삭제
    await this.createMany({ urls, productId }); // 새로운 이미지 url로 데이터 생성
  }

  findAllByProductId({
    productId,
  }: IImagesServiceFindAllByProductId): Promise<Image[]> {
    return this.imagesRepository.find({
      where: { product: { id: productId } },
    });
  }

  getUrlObj({ urls, images }: IImagesServiceGetUrlObj): Url {
    const urlObj = {};

    images.forEach((image) => (urlObj[image.url] = 1)); // 이미지 테이블에 이미 존재하는 이미지에 대해서 1을 할당
    urls.forEach((url) => urlObj[url]++); // 이미 존재하는 이미지와 업데이트할 이미지가 같다면 1을 더함 -> 이미지를 삭제하지 않고 유지하겠다는 의미
    // -> 만약 이미 존재하는 이미지가 아닌 경우 urlObj[url]은 undefined이므로 1을 더하면 NaN 값이 들어감 -> 이미지 테이블에 새롭게 추가할 이미지라는 의미

    return urlObj;
  }

  async createNonExistingImages({
    urlObj,
    productId,
  }: IImagesServiceCreateNonExistingImages): Promise<void> {
    const urls = [];

    for (const url in urlObj) {
      if (isNaN(urlObj[url])) urls.push(url); // 값이 NaN인 경우 이미지 테이블에 새롭게 추가
    }

    await this.createMany({ urls, productId });
  }

  async deleteImageInBucket({
    urls,
  }: IImagesServiceDeleteImageInBucket): Promise<void> {
    // https://github.com/googleapis/nodejs-storage/blob/main/samples/deleteFile.js
    // 이미지 테이블에서 데이터를 삭제할 때 스토리지에 있는 실제 이미지 파일도 삭제하는 로직
    const storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      keyFilename: process.env.GCP_KEY_FILENAME,
    }).bucket(process.env.GCP_BUCKET_NAME);

    urls.forEach(async (url) => {
      try {
        const filename = url.replace(process.env.GCP_BUCKET_NAME + '/', ''); // url: '버킷이름/이미지파일이름' 에서 '버킷이름/'를 ''로 대체
        await storage.file(filename).delete();
      } catch (error) {
        console.log('😡😡버킷에서 파일 삭제 실패😡😡😡');
        console.log(error);
      }
    });
  }

  deleteImagesByUrls({ urlObj }: IImagesServiceDeleteImagesByUrls): void {
    const urls: string[] = [];

    for (const url in urlObj) {
      if (urlObj[url] === 1) urls.push(url); // 이미 테이블에 있는 이미지이지만 업데이트할 이미지에 포함되지 않는 경우 getUrlObj 메서드에서 값을 1로 갖는 프로퍼티가 됨
    }

    urls.forEach((url) => this.imagesRepository.delete({ url }));
    this.deleteImageInBucket({ urls });
  }

  async filterImagesAndCreate({
    urls,
    productId,
  }: IImagesServiceFilterImagesAndCreate) {
    // 2. 상품 ID에 해당하는 모든 이미지 데이터를 찾아옵니다.
    const images = await this.findAllByProductId({ productId }); // [Image, Image, ...]

    // 3. 이미 테이블에 있는 이미지면 유지합니다.
    // 4. 기존에 없는 이미지면서 클라이언트가 보내준 이미지면 데이터를 새로 생성합니다.
    const urlObj = this.getUrlObj({ urls, images });
    this.createNonExistingImages({ urlObj, productId });

    // 5. 해당 안되는 기존 이미지는 제거합니다.
    this.deleteImagesByUrls({ urlObj });
  }
}
