import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { TenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/tenancy-agreements-repository';
import { UserTenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/user-tenancy-agreements-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerSendTenancyAgreementReqBodyDto,
  OwnerSendTenancyAgreementReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerSendTenancyAgreementReqBodyDto;
  query: OwnerSendTenancyAgreementReqQueryDto;
};

export class OwnerSendTenancyAgreementUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserTenancyAgreementRepositoryImpl)
    private userTenancyAgreementRepositoryImpl: UserTenancyAgreementRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const createdAgreement =
      await this.userTenancyAgreementRepositoryImpl.create(body);

    return { record: createdAgreement };
  }
}
