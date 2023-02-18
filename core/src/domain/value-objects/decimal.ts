import { BadRequestException } from '@nestjs/common';

export class Decimal {
  value: number;

  constructor(value: number) {
    if (!value) {
      throw new BadRequestException('Decimal value required');
    }
    this.value = value;
  }
}
