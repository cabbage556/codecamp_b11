import { IAuthUser, IContext } from 'src/commons/interfaces/context';
import { Payment, PAYMENT_STATUS_ENUM } from '../entities/payment.entity';

export interface IPaymentsServiceSavePayment {
  impUid: string;
  amount: number;
  user: IAuthUser['user'];
  status: PAYMENT_STATUS_ENUM;
}

export interface IPaymentsServiceFindOneByImpUid {
  impUid: string;
}

export interface IPaymentsServiceCheckDuplication {
  impUid: string;
}

export interface IPaymentsServiceCreate {
  impUid: string;
  amount: number;
  // user: IAuthUser['user'];
  context: IContext;
}

export interface IPaymentsServiceFindOneCanceledPayment {
  impUid: string;
}

export interface IPaymentsServiceCheckAlreadyCanceled {
  payments: Payment[];
}

export interface IPaymentsServiceCheckPaymentIncluded {
  impUid: string;
}

export interface IPaymentsServiceFindByImpUidAndUser {
  impUid: string;
  context: IContext;
}

export interface IPaymentsServiceCancel {
  impUid: string;
  context: IContext;
}
