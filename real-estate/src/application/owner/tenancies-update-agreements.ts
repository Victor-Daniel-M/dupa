import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenanciesUpdateAgreementsReqBodyDto,
  OwnerTenanciesUpdateAgreementsReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenanciesUpdateAgreementsReqBodyDto;
  query: OwnerTenanciesUpdateAgreementsReqQueryDto;
};

export class OwnerTenanciesUpdateAgreementsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for updating tenancy agreements here

    return {};
  }
}
