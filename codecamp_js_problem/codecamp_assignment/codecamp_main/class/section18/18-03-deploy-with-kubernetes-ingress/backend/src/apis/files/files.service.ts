import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

export interface IFilesServiceUpload {
  file: FileUpload;
}

@Injectable()
export class FilesService {
  upload({ file }: IFilesServiceUpload): string {
    console.log(file);

    // 1. 클라우드 스토리지에 파일 저장하기
    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: 'backend-377405', // 프로젝트 id
      keyFilename: 'backend-377405-5c09080a7e22.json', // 파일 이름
    }).bucket('liberty556-storage'); // 버킷 이름

    // 1-2) 스토리지에 파일 업로드
    // - 파일 읽기 -> 파이프 -> 스토리지
    file
      .createReadStream()
      .pipe(storage.file('my_image').createWriteStream())
      .on('finish', () => console.log('😈😈😈😈😈😈업로드 성공😈😈😈😈😈😈'))
      .on('error', () => console.log('😡😡😡😡😡😡업로드 실패😡😡😡😡😡😡'));

    console.log('😈😈😈😈😈😈파일 전송 완료😈😈😈😈😈😈');

    return '끝!';
  }
}
