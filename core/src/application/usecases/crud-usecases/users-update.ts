import { UserRepositoryImpl } from '@core/infrastructure/repositories/users-repository';
import { UsersUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/users.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UsersUpdateUsecase {
  private userRepository: UserRepositoryImpl;

  constructor({
    userRepository,
  }: {
    userRepository: UserRepositoryImpl;
  }) {
    this.userRepository = userRepository;
  }

  async execute(data: z.infer<typeof UsersUpdateSchema>) {
    // @ts-ignore
    const user = await this.userRepository.update(data.id!, data);;
    return user;
  }
}