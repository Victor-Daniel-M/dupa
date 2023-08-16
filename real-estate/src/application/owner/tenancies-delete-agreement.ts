import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenanciesDeleteAgreementReqBodyDto,
  OwnerTenanciesDeleteAgreementReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenanciesDeleteAgreementReqBodyDto;
  query: OwnerTenanciesDeleteAgreementReqQueryDto;
};

export class OwnerTenanciesDeleteAgreementUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for deleting tenancy agreements here

    return {};
  }
}
