import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PaymentService } from './payment.service';
import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';

@Resolver('Payment')
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Query('payment')
  findOne(@Args('id') id: number) {
    return this.paymentService.findOne(id);
  }

  @Mutation('updatePayment')
  update(@Args('updatePaymentInput') updatePaymentInput: UpdatePaymentInput) {
    return this.paymentService.update(updatePaymentInput.id, updatePaymentInput);
  }
}
