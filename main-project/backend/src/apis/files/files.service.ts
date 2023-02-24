import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { getToday } from 'src/commons/libraries/utils';
import { IFilesServiceUpload } from './interfaces/files-service.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
  async upload({ files: _files }: IFilesServiceUpload): Promise<string[]> {
    const files = await Promise.all(_files);

    // 스토리지 셋팅
    const bucket = process.env.GCP_BUCKET_NAME;
    const storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      keyFilename: process.env.GCP_KEY_FILENAME,
    });

    // 스토리지에 파일 업로드하기
    const results = await Promise.all(
      files.map((file) => {
        return new Promise<string>((resolve, reject) => {
          const filename = `${getToday()}/${uuidv4()}/origin/${file.filename}`;
          file
            .createReadStream() // 파일읽기
            .pipe(storage.bucket(bucket).file(filename).createWriteStream()) // 파이프(스토리지)
            .on('finish', () => resolve(`${bucket}/${filename}`))
            .on('error', () => reject('😡😡파일 업로드 실패😡😡'));
        });
      }),
    );
    console.log(`이미지파일url: ${results}`);
    console.log('😈😈😈😈😈😈파일 전송 완료😈😈😈😈😈😈');

    return results;
  }
}
