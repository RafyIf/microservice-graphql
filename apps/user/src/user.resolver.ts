import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: any) {
    return this.userService.create(createProductInput);
  }

  @Query('meProfile')
  findOne(@Args('userId') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation('updateUser')
  update(@Args('updateUserInput') updateUserInput: any) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation('register')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
