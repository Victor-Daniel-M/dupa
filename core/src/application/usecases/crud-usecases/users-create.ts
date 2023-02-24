import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { UsersCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/users.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UsersCreateUsecase {
  private userRepository: UserRepositoryImpl;

  constructor({
    userRepository,
  }: {
    userRepository: UserRepositoryImpl;
  }) {
    this.userRepository = userRepository;
  }

  async execute(data: z.infer<typeof UsersCreateSchema>) {
    // @ts-ignore
    const user = await this.userRepository.createOrThrow(data, 'id');
    return user;
  }
}