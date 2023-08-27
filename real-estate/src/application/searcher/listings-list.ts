import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
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
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private OfferingRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const offerings = this.OfferingRepositoryImpl.getAllPaginated({});
    return offerings;
  }
}
