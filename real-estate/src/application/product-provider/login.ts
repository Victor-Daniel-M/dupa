import { ProviderLoginDto } from 'real-estate/src/adapter/dtos/provider.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { Inject } from '@nestjs/common';

export class ProviderLoginUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
  ) {}

  async execute(data: { body: ProviderLoginDto }) {
    const { body } = data;

    return {};
  }
}
