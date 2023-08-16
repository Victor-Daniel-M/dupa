import { ProviderRegisterDto } from 'real-estate/src/adapter/dtos/provider.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { Inject } from '@nestjs/common';

export class ProviderRegisterUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
  ) {}

  async execute(data: { body: ProviderRegisterDto }) {
    const { body } = data;

    return {};
  }
}
