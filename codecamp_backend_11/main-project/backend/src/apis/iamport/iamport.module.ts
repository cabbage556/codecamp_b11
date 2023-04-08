import { Module } from '@nestjs/common';
import { IamportService } from './iamport.service';

@Module({
  providers: [
    IamportService, //
  ],
})
export class IamportModule {}
