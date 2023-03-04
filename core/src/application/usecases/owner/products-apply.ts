import { z } from 'nestjs-zod/z';

export class ProductsApplyUsecase {
  async execute(data: any) {
    console.log('ProductsApplyUsecase');
  }
}
