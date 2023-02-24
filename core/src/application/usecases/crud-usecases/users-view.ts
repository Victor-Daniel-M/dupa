import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { UsersViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/users.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UsersViewUsecase {
  private userRepository: UserRepositoryImpl;

  constructor({
    userRepository,
  }: {
    userRepository: UserRepositoryImpl;
  }) {
    this.userRepository = userRepository;
  }

  async execute(data: z.infer<typeof UsersViewSchema>) {
    // @ts-ignore
    const user = await this.userRepository.findOrThrow(data);
    return user;
  }
}