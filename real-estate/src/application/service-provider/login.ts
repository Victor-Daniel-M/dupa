import { DB_TYPES } from '@db/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { Inject } from '@nestjs/common';
import {
  ServiceProviderLoginReqBodyDto,
  ServiceProviderLoginReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

export class ServiceProviderLoginUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
  ) {}

  async execute(data: {
    body: ServiceProviderLoginReqBodyDto;
    query: ServiceProviderLoginReqQueryDto;
  }) {
    const { body } = data;

    const userByEmail = await this.usersRepository.getOneBy({
      key: 'email',
      value: body.email,
    });

    return {
      user: userByEmail,
    };
  }
}
