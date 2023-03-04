import { z } from 'nestjs-zod/z';

export class ServicesCreateUsecase {
  async execute(data: any) {
    console.log('ServicesCreateUsecase');
  }
}
