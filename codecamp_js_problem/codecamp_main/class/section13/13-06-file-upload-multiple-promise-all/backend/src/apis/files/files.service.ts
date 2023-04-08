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

    const waitedFiles = await Promise.all(files);

    console.log(waitedFiles);

    // 1. 클라우드 스토리지에 파일 저장하기
    // 1-1) 스토리지 셋팅하기
    const bucket = 'liberty556-storage';
    const storage = new Storage({
      projectId: 'backend-377405', // 프로젝트 id
      keyFilename: 'backend-377405-5c09080a7e22.json', // 파일 이름
    }).bucket(bucket); // 버킷 이름

    // 1-2) 스토리지에 파일 업로드
    // - 파일 읽기 -> 파이프 -> 스토리지
    console.time('업로드 시간 확인');

    // for 문 대신 Promise.all([]) 사용해서 모든 이미지 한번에 업로드하고 모든 업로드 결과 한번만 기다리기
    const results = await Promise.all(
      waitedFiles.map((el) => {
        return new Promise<string>((resolve, reject) => {
          // <string> - resolve 타입이 string이다.
          el.createReadStream()
            .pipe(storage.file(el.filename).createWriteStream())
            .on('finish', () => resolve(`${bucket}/${el.filename}`))
            .on('error', () => reject('😡😡😡😡😡😡업로드 실패😡😡😡😡😡😡'));
        });
      }),
    );
    console.timeEnd('업로드 시간 확인');
    console.log('😈😈😈😈😈😈파일 전송 완료😈😈😈😈😈😈');

    return results;
  }
}
