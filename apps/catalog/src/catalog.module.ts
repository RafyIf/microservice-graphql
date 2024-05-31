import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
  ApolloDriver,
  ApolloDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { join } from 'path';
@Module({
  imports: [
    CategoryModule,
    ProductModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./**/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'apps/catalog/src/schema.graphql.ts'), // generated graphql schema
        outputAs: 'class',
      },
    }),
  ],
})
export class CatalogModule {}
