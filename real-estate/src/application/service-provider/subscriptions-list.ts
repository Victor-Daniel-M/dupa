import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  ServiceProviderSubscriptionsListReqBodyDto,
  ServiceProviderSubscriptionsListReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

type ExecuteInput = {
  body: ServiceProviderSubscriptionsListReqBodyDto;
  query: ServiceProviderSubscriptionsListReqQueryDto;
};

export class ServiceProviderSubscriptionsListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing subscriptions here

    return {};
  }
}
