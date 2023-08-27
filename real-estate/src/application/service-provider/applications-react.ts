import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  ServiceProviderApplicationsReactReqBodyDto,
  ServiceProviderApplicationsReactReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

type ExecuteInput = {
  body: ServiceProviderApplicationsReactReqBodyDto;
  query: ServiceProviderApplicationsReactReqQueryDto;
};

export class ServiceProviderApplicationsReactUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for reacting to service provider applications here

    return {};
  }
}
