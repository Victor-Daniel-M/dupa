import { compare, hash } from 'bcrypt';

export class Password {
  value: string;

  constructor(value: string) {
    if (!value || value.length < 8) {
      throw new Error('Password should be longer that 7');
    }
    this.value = value;
  }

  async compare(password: string): Promise<boolean> {
    // return await compare(password, this.value);
    return password == this.value;
  }

  async hash(): Promise<string> {
    return await hash(this.value, 10);
  }
}
