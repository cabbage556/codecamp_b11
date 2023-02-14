import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { IContext } from 'src/commons/interfaces/context';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { Payment } from './entities/payment.entity';
import { PaymentsService } from './payments.service';

@Resolver()
export class PaymentsResolver {
  constructor(
    private readonly paymentsService: PaymentsService, //
  ) {}

  @Mutation(() => Payment)
  @UseGuards(GqlAuthGuard('access'))
  async createPayment(
    @Args('impUid') impUid: string, //
    @Args({
      name: 'amount',
      type: () => Int,
    })
    amount: number, //
    @Context() context: IContext, // context.req.user 내부에 유저 id 존재
  ): Promise<Payment> {
    return this.paymentsService.create({ impUid, amount, context });
  }
}
