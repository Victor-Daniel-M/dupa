import { User } from '../entities/user';
import { Email } from '../value-objects/email';

export interface UserRepository {
  findOneByEmail(email: Email): Promise<User | undefined>;
  save(user: User): Promise<void>;
}
