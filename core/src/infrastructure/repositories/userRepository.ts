// import { UserRepository } from '../../domain/repositories/userRepository';
// import { User } from '../../domain/entities/user';
// import { string } from '../../../src/domain/value-objects/string';

// export class UserRepositoryImpl implements UserRepository {
//   private users: User[] = [
//     {
//       email: 'test@email.com',
//       password: '1234567890',
//       id: '1',
//     },
//   ];

//   async findOneByEmail(email: string): Promise<User | undefined> {
//     return this.users.find((user) => user.email.value === email.value);
//   }

//   async save(user: User): Promise<void> {
//     this.users.push(user);
//   }
// }
