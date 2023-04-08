import { IAuthUser } from 'src/commons/interfaces/context';

export interface IPointsTransactionsServiceCreate {
  impUid: string;
  amount: number;
  user: IAuthUser['user']; // User 타입이 아니라는 것에 주의해야 함
}
