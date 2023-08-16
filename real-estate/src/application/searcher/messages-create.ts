import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SearcherCreateMessageReqBodyDto,
  SearcherCreateMessageReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';

type ExecuteInput = {
  body: SearcherCreateMessageReqBodyDto;
  query: SearcherCreateMessageReqQueryDto;
};

export class SearcherCreateMessageViewUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private userRepositoryImpl: UserRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    return {};
  }
}
