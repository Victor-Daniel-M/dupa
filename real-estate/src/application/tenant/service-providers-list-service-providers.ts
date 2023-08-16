import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantServiceProvidersListServiceProvidersReqBodyDto,
  TenantServiceProvidersListServiceProvidersReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantServiceProvidersListServiceProvidersReqBodyDto;
  query: TenantServiceProvidersListServiceProvidersReqQueryDto;
};

export class TenantServiceProvidersListServiceProvidersUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing service providers here

    return {};
  }
}
