import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantTenanciesListAgreementsReqBodyDto,
  TenantTenanciesListAgreementsReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantTenanciesListAgreementsReqBodyDto;
  query: TenantTenanciesListAgreementsReqQueryDto;
};

export class TenantTenanciesListAgreementsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing tenancy agreements here

    return {};
  }
}
