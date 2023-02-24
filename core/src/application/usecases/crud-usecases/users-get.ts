import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { UsersGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/users.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UsersGetUsecase {
  private userRepository: UserRepositoryImpl;

  constructor({
    userRepository,
  }: {
    userRepository: UserRepositoryImpl;
  }) {
    this.userRepository = userRepository;
  }

  async execute(data: z.infer<typeof UsersGetSchema>) {
    // @ts-ignore
    const user = await this.userRepository.findAll();
    return user;
  }
}