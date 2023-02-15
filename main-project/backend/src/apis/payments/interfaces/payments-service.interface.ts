import { IAuthUser, IContext } from 'src/commons/interfaces/context';
import { PAYMENT_STATUS_ENUM } from '../entities/payment.entity';

export interface IPaymentsServiceCreate {
  impUid: string;
  amount: number;
  // user: IAuthUser['user'];
  context: IContext;
}

export interface IPaymentsServiceSavePayment {
  impUid: string;
  amount: number;
  user: IAuthUser['user'];
  status: PAYMENT_STATUS_ENUM;
}

export interface IPaymentsServiceFindOneByImpUid {
  impUid: string;
}

export interface IPaymentsServiceCancel {
  impUid: string;
  context: IContext;
}

export interface IPaymentsServiceCheckPaymentAdded {
  impUid: string;
}

export interface IPaymentsServiceFindOneCanceledPayment {
  impUid: string;
}

export interface IPaymentsServiceCheckPaymentCanceled {
  impUid: string;
}
