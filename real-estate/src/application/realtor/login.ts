import { RealtorLoginDto } from 'real-estate/src/adapter/dtos/realtor.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { Inject } from '@nestjs/common';

export class RealtorLoginUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
  ) {}

  async execute(data: { body: RealtorLoginDto }) {
    const { body } = data;

    return {};
  }
}
