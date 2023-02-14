import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateImageInput } from './dto/create-image.input';
import { Image } from './entities/image.entity';
import { ImagesService } from './images.service';

@Resolver()
export class ImagesResolver {
  constructor(
    private readonly imagesService: ImagesService, //
  ) {}

  @Mutation(() => Image)
  createImage(
    @Args('createImageInput') createImageInput: CreateImageInput, //
  ): Promise<Image> {
    return this.imagesService.create({ createImageInput });
  }
}
