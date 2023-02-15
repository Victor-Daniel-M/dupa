import { UserRepository } from '../../domain/repositories/userRepository';
import { User } from '../../domain/entities/user';
import { Email } from '../../domain/value-objects/email';
import { Password } from '../../domain/value-objects/password';
import { CString } from 'core/src/domain/value-objects/string';

export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [
    {
      email: new Email('test@email.com'),
      password: new Password('1234567890'),
      id: new CString('1'),
    },
  ];

  async findOneByEmail(email: Email): Promise<User | undefined> {
    return this.users.find((user) => user.email.value === email.value);
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
