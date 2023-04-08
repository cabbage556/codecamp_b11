import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { IImagesServiceCreate } from './interface/images-service.interface';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imagesRepository: Repository<Image>, //
  ) {}

  async create({ createImageInput }: IImagesServiceCreate): Promise<Image> {
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);
    console.log(`createImageInput.productId: ${createImageInput.productId}`);
    console.log(`📌📌📌📌📌📌📌📌📌📌📌📌📌📌`);

    const productId = createImageInput.productId;

    const result = await this.imagesRepository.save({
      ...createImageInput,
      product: {
        id: productId,
      },
    });
    return result;
  }
}
