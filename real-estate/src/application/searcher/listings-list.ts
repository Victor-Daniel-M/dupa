import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SearcherViewListingReqBodyDto,
  SearcherViewListingReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';

type ExecuteInput = {
  body: SearcherViewListingReqBodyDto;
  query: SearcherViewListingReqQueryDto;
};

export class SearcherViewListingListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private PropertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const properties = this.PropertyRepositoryImpl.getAllPaginated({});
    return properties;
  }
}
