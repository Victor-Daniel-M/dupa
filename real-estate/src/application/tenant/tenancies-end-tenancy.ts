import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantTenanciesEndTenancyReqBodyDto,
  TenantTenanciesEndTenancyReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantTenanciesEndTenancyReqBodyDto;
  query: TenantTenanciesEndTenancyReqQueryDto;
};

export class TenantTenanciesEndTenancyUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for ending a tenancy here

    return {};
  }
}
