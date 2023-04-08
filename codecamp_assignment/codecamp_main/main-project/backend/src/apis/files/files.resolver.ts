import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { FilesService } from './files.service';

@Resolver()
export class FilesResolver {
  constructor(
    private readonly filesService: FilesService, //
  ) {}

  @Mutation(() => [String])
  uploadFile(
    @Args({
      name: 'files',
      type: () => [GraphQLUpload], // gql FileUpload 타입
    })
    files: FileUpload[], // 파일을 여러개 받아옴
  ): Promise<string[]> {
    return this.filesService.upload({ files });
  }
}
