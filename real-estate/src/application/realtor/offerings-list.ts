import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorViewOfferingListReqBodyDto,
  RealtorViewOfferingListReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedGetUserOfferingsUsecase } from '../general/advanced-get-user-offerings';
import { Offering, UserOffering } from '@db/domain/entities';

type ExecuteInput = {
  body: RealtorViewOfferingListReqBodyDto;
  query: RealtorViewOfferingListReqQueryDto;
};

export class RealtorViewOfferingListUsecase {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.AdvancedGetUserOfferingsUsecase)
    private advancedGetUserOfferingsUsecase: AdvancedGetUserOfferingsUsecase,
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { userId } = data.query;
    let offerings: Offering[] = [];

    const userOfferings = await this.advancedGetUserOfferingsUsecase.execute({
      query: {
        userId: userId,
      },
    });

    const offeringsIds = (userOfferings.records as UserOffering[]).map(
      (record) => record.offeringId,
    );

    if (offeringsIds.length) {
      offerings = await this.offeringRepositoryImpl.getIn({
        key: 'id',
        list: offeringsIds,
      });
    }

    return { records: offerings };
  }
}
