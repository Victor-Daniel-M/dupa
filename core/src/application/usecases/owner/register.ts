import { z } from 'nestjs-zod/z';

export class RegisterUsecase {
  async execute(data: any) {
    console.log('RegisterUsecase');
  }
}
