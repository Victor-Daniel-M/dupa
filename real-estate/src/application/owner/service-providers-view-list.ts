import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerServiceProvidersViewListReqBodyDto,
  OwnerServiceProvidersViewListReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerServiceProvidersViewListReqBodyDto;
  query: OwnerServiceProvidersViewListReqQueryDto;
};

export class OwnerServiceProvidersViewListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for viewing a list of service providers here

    return {};
  }
}
