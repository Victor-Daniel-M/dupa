import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenanciesListAgreementsReqBodyDto,
  OwnerTenanciesListAgreementsReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenanciesListAgreementsReqBodyDto;
  query: OwnerTenanciesListAgreementsReqQueryDto;
};

export class OwnerTenanciesListAgreementsUsecase {
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
