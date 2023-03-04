import { z } from 'nestjs-zod/z';

export class MessagesCreateUsecase {
  async execute(data: any) {
    console.log('MessagesCreateUsecase');
  }
}
