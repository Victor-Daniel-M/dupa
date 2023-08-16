import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantTenanciesViewAgreementReqBodyDto,
  TenantTenanciesViewAgreementReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantTenanciesViewAgreementReqBodyDto;
  query: TenantTenanciesViewAgreementReqQueryDto;
};

export class TenantTenanciesViewAgreementUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for viewing a tenancy agreement here

    return {};
  }
}
