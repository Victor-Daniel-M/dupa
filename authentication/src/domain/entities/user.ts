import { Email } from '../value-objects/email';
import { Password } from '../value-objects/password';

export class User {
  id?: string;
  email!: Email;
  password!: Password;
  city!: string;
}
