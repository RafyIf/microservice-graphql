import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
    typePaths: ['**/*.graphql'],
    definitions: {
      path: join(process.cwd(), 'apps/user/src/schema.graphql.ts'), // generated graphql schema
      outputAs: 'class',
    },
  }),],
  providers: [UserResolver, UserService],
})
export class UserModule {}
