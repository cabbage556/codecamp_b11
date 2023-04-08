import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FilesService } from './files.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

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
    files: FileUpload[], // 브라우저에서 파일 여러개 받아옴 (타입스크립트 FileUpload 타입)
  ): Promise<string[]> {
    return this.filesService.upload({ files });
  }
}
