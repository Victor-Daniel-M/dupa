import { z } from 'nestjs-zod/z';

export class CountsViewUsecase {
  async execute(data: any) {
    console.log('CountsViewUsecase');
  }
}
