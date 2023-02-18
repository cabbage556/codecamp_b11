import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

export interface IFilesServiceUpload {
  files: FileUpload[];
}

@Injectable()
export class FilesService {
  async upload({ files }: IFilesServiceUpload): Promise<string[]> {
    console.log(files);

    const waitedFiles = [];
    waitedFiles[0] = await files[0];
    waitedFiles[1] = await files[1];

    console.log(waitedFiles);

    // 1. 클라우드 스토리지에 파일 저장하기
    // 1-1) 스토리지 셋팅하기
    const storage = new Storage({
      projectId: 'backend-377405', // 프로젝트 id
      keyFilename: 'backend-377405-5c09080a7e22.json', // 파일 이름
    }).bucket('liberty556-storage'); // 버킷 이름

    // 1-2) 스토리지에 파일 업로드
    // - 파일 읽기 -> 파이프 -> 스토리지
    console.time('업로드 시간 확인');
    const results = [];
    for (let i = 0; i < waitedFiles.length; i++) {
      results[i] = await new Promise((resolve, reject) => {
        waitedFiles[i]
          .createReadStream()
          .pipe(storage.file(waitedFiles[i].filename).createWriteStream())
          .on('finish', () => resolve('😈😈😈😈😈😈업로드 성공😈😈😈😈😈😈'))
          .on('error', () => reject('😡😡😡😡😡😡업로드 실패😡😡😡😡😡😡'));
      });
    }
    // --> for 문 안에서 await를 사용하지 않는다. (📌📌📌📌📌안티 패턴📌📌📌📌📌📌)
    console.timeEnd('업로드 시간 확인');

    console.log('😈😈😈😈😈😈파일 전송 완료😈😈😈😈😈😈');

    return ['끝!', '끝!'];
  }
}
