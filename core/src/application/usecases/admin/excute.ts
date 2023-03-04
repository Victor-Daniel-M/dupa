import { z } from 'nestjs-zod/z';

export class ExecuteUsecase {
  async execute(data: any) {
    console.log('ExecuteUsecase');
  }
}
