import {
  SearcherLoginReqBodyDto,
  SearcherLoginReqQueryDto,
} from 'real-estate/src/adapter/dtos/searcher.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { Inject } from '@nestjs/common';

export class SearcherLoginUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepository: UserRepositoryImpl,
  ) {}

  async execute(data: {
    body: SearcherLoginReqBodyDto;
    query: SearcherLoginReqQueryDto;
  }) {
    const { body } = data;

    const userByEmail = await this.usersRepository.getBy({
      key: 'email',
      value: body.email,
    });

    return {
      user: userByEmail,
    };
  }
}
