import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { Payment } from './entities/payment.entity';
import { PaymentsService } from './payments.service';

@Resolver()
export class PaymentsResolver {
  constructor(
    private readonly paymentsService: PaymentsService, //
  ) {}

  // 서비스에서 위에 위치한 코드에 대한 API를 먼저 호출한다.
  // 파일 순서: 1 -> 2 -> 2 -> 4
  @Mutation(() => Payment)
  createPayment(
    @Args('amount') amount: number, //
  ) {
    return this.paymentsService.create({ amount });
  }

  // 서비스에서 위에 위치한 코드에 대한 API를 먼저 호출한다.
  // 파일 순서: 1 -> 2 -> 2 -> 4
  @Query(() => [Payment])
  fetchPayments() {
    return this.paymentsService.findAll();
  }
}
