import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { UsersDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/users.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UsersDeleteUsecase {
  private userRepository: UserRepositoryImpl;

  constructor({
    userRepository,
  }: {
    userRepository: UserRepositoryImpl;
  }) {
    this.userRepository = userRepository;
  }

  async execute(data: z.infer<typeof UsersDeleteSchema>) {
    // @ts-ignore
    const user = await this.userRepository.delete(data.id!);
    return user;
  }
}