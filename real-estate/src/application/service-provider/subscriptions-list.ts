import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
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
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing subscriptions here

    return {};
  }
}
