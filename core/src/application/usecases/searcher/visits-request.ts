import { z } from 'nestjs-zod/z';

export class VisitsRequestUsecase {
  async execute(data: any) {
    console.log('VisitsRequestUsecase');
  }
}
