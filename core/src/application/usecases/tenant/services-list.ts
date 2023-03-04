import { z } from 'nestjs-zod/z';

export class ServicesListUsecase {
  async execute(data: any) {
    console.log('ServicesListUsecase');
  }
}
