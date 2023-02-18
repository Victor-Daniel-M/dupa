import { BadRequestException } from '@nestjs/common';

export class CString {
  value: string;

  constructor(value: string, isOptional?: boolean) {
    if (!value && !isOptional) {
      throw new BadRequestException('String cannot be empty');
    }
    this.value = value;
  }
}
