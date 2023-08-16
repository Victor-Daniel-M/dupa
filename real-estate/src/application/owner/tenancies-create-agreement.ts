import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenanciesCreateAgreementReqBodyDto,
  OwnerTenanciesCreateAgreementReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenanciesCreateAgreementReqBodyDto;
  query: OwnerTenanciesCreateAgreementReqQueryDto;
};

export class OwnerTenanciesCreateAgreementUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for creating tenancy agreements here

    return {};
  }
}
