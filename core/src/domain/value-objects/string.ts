export class CString {
  value: string;

  constructor(value: string, isOptional?: boolean) {
    if (!value && !isOptional) {
      throw new Error('String cannot be empty');
    }
    this.value = value;
  }
}
