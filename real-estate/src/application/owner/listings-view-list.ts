import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerListingsViewListReqBodyDto,
  OwnerListingsViewListReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedGetUserOfferingsUsecase } from '../general/advanced-get-user-offerings';

type ExecuteInput = {
  body: OwnerListingsViewListReqBodyDto;
  query: OwnerListingsViewListReqQueryDto;
};

export class OwnerListingsViewListUsecase {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.AdvancedGetUserOfferingsUsecase)
    private advancedGetUserOfferingsUsecase: AdvancedGetUserOfferingsUsecase,
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { query } = data;

    const userOfferings = await this.advancedGetUserOfferingsUsecase.execute({
      query: {
        userId: query.userId,
      },
    });

    const userOfferingsIds = userOfferings.records.map((record) => record.id);

    const offerings = await this.offeringRepositoryImpl.getIn({
      key: 'id',
      list: userOfferingsIds,
    });

    return offerings;
  }
}
