import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
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
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for reacting to service provider applications here

    return {};
  }
}
