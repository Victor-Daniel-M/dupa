import { z } from 'nestjs-zod/z';

export class ProductsCreateUsecase {
  async execute(data: any) {
    console.log('ProductsCreateUsecase');
  }
}
