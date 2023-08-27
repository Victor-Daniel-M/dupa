import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
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
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for updating tenancy agreements here

    return {};
  }
}
