import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    PaymentModule,
    OrderModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./**/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/transaction/src/schema.graphql.ts'), // generated graphql schema
        outputAs: 'class',
      },
    }),
  ],
})
export class TransactionModule {}
