import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from '../schema.graphql';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sampo',
      price: 15000,
      slug: 'sampo-ala-ala',
      category: { id: 1, name: 'Peralatan' },
      description: null,
    },
    {
      id: 2,
      name: 'Freshcare',
      price: 1000,
      slug: 'freshcare-palsu',
      category: { id: 1, name: 'Obat' },
      description: null,
    },
  ];
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
