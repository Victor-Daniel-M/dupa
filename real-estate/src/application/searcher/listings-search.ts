import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SearcherListingsSearchReqBodyDto,
  SearcherListingsSearchReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';

type ExecuteInput = {
  body: SearcherListingsSearchReqBodyDto;
  query: SearcherListingsSearchReqQueryDto;
};

export class SearcherListingsSearchUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private userRepositoryImpl: UserRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    return {};
  }
}
