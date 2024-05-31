import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Resolver('Order')
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation('createOrder')
  create(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.orderService.create(createOrderInput);
  }

  @Query('orders')
  findAll() {
    return this.orderService.findAll();
  }

  @Query('order')
  findOne(@Args('id') id: number) {
    return this.orderService.findOne(id);
  }
  
  @Query('orderByUser')
  orderByUser(@Args('userId') id: number) {
    return this.orderService.findOne(id);
  }
}
