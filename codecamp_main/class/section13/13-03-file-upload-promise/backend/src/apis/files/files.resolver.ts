import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FilesService } from './files.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

@Resolver()
export class FilesResolver {
  constructor(
    private readonly filesService: FilesService, //
  ) {}

  @Mutation(() => String)
  uploadFile(
    @Args({
      name: 'file',
      type: () => GraphQLUpload, // gql FileUpload 타입
    })
    file: FileUpload, // 브라우저에서 파일 받아옴 (타입스크립트 FileUpload 타입)
  ): Promise<string> {
    return this.filesService.upload({ file });
  }
}
