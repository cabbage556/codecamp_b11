import {
  HttpException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import axios from 'axios';
import {
  IIamportServiceCancelPayment,
  IIamportServiceCheckPayment,
} from './interfaces/iamport-service.interface';

@Injectable()
export class IamportService {
  async getAccessToken(): Promise<string> {
    try {
      const result = await axios({
        url: 'https://api.iamport.kr/users/getToken',
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: {
          imp_key: process.env.PORTONE_API_KEY,
          imp_secret: process.env.PORTONE_API_SECRET,
        },
      });

      console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
      console.log(`Iamport accessToken: ${result.data.response.access_token}`);
      console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');

      return result.data.response.access_token;
    } catch (error) {
      // 액세스토큰 요청 실패 시 에러 던지기
      throw new HttpException(
        error.response.data.message,
        error.response.data.status,
      );
    }
  }

  async checkPayment({
    impUid,
    amount,
  }: IIamportServiceCheckPayment): Promise<void> {
    let payment;

    try {
      const accessToken = await this.getAccessToken();
      payment = await axios({
        url: `https://api.iamport.kr/payments/${impUid}`,
        method: 'get',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (error) {
      console.log(error);
      // 유효하지 않은 impUid로 API를 요청하면 404 에러 발생
      // 에러를 받아서 메세지 그대로 던지기
      throw new HttpException(
        error.response.data.message,
        error.response.data.status,
      );
    }

    // console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
    // console.log('payment.data.response');
    // console.log(payment.data.response);
    // console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');

    // 입력 금액과 조회 금액이 다르면 에러 던지기
    if (amount !== payment?.data.response.amount)
      throw new UnprocessableEntityException('잘못된 결제 정보입니다.');
  }

  async cancelPayment({ impUid }: IIamportServiceCancelPayment): Promise<void> {
    try {
      const accessToken = await this.getAccessToken();
      const result = await axios({
        url: 'https://api.iamport.kr/payments/cancel',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken,
        },
        data: { imp_uid: impUid },
      });
      return result.data.response.cancel_amount;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response.data.message,
        error.response.data.status,
      );
    }
  }
}
