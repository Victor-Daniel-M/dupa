import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { TenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/tenancy-agreements-repository';
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
    @Inject(DB_TYPES.repositories.TenancyAgreementRepositoryImpl)
    private tenancyAgreementRepositoryImpl: TenancyAgreementRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const createdAgreement = await this.tenancyAgreementRepositoryImpl.create(
      body,
    );

    return { record: createdAgreement };
  }
}
