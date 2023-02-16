export class Decimal {
  value: number;

  constructor(value: number) {
    if (!value) {
      throw new Error('Decimal value required');
    }
    this.value = value;
  }
}
