import { z } from 'nestjs-zod/z';

export class PaymentsMakeUsecase {
  async execute(data: any) {
    console.log('PaymentsMakeUsecase');
  }
}
