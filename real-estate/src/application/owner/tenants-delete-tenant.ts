import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenantsDeleteTenantReqBodyDto,
  OwnerTenantsDeleteTenantReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenantsDeleteTenantReqBodyDto;
  query: OwnerTenantsDeleteTenantReqQueryDto;
};

export class OwnerTenantsDeleteTenantUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for deleting tenants here

    return {};
  }
}
