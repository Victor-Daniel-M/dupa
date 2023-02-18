import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import validator from 'validator';

export class Email {
  value: string;

  constructor(value: string) {
    if (!value || !validator.isEmail(value)) {
      throw new BadRequestException('Invalid email');
    }
    this.value = value;
  }
}
