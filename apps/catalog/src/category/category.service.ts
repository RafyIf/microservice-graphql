import { Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  create(createCategoryInput: CreateCategoryInput) {
    return 'This action adds a new category';
  }

  findAll() {
    return [
      { id: 1, name: 'Make Up' },
      { id: 2, name: 'Botol' },
    ];
  }

  findOne(id: number) {
    return { id, name: `This action returns a #${id} category` };
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
