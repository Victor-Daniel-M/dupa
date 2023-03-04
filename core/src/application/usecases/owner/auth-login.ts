import { z } from 'nestjs-zod/z';

export class AuthLoginUsecase {
  async execute(data: any) {
    console.log('AuthLoginUsecase');
  }
}
