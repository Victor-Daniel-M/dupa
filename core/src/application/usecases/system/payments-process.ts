import { z } from 'nestjs-zod/z';

export class PaymentsProcessUsecase {
  async execute(data: any) {
    console.log('PaymentsProcessUsecase');
  }
}
