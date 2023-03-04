import { z } from 'nestjs-zod/z';

export class ServicesRequestUsecase {
  async execute(data: any) {
    console.log('ServicesRequestUsecase');
  }
}
