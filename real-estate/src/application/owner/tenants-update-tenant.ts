import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenantsUpdateTenantReqBodyDto,
  OwnerTenantsUpdateTenantReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenantsUpdateTenantReqBodyDto;
  query: OwnerTenantsUpdateTenantReqQueryDto;
};

export class OwnerTenantsUpdateTenantUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for updating tenants here

    return {};
  }
}