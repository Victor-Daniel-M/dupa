import validator from 'validator';

export class Email {
  value: string;

  constructor(value: string) {
    if (!value || !validator.isEmail(value)) {
      throw new Error('Invalid email');
    }
    this.value = value;
  }
}
