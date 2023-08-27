import { TenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/tenancy-agreements-repository';
import { UserTenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/user-tenancy-agreements-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SearcherAcceptTenancyAgreementReqBodyDto,
  SearcherAcceptTenancyAgreementReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';

type ExecuteInput = {
  body: SearcherAcceptTenancyAgreementReqBodyDto;
  query: SearcherAcceptTenancyAgreementReqQueryDto;
};

export class SearcherAcceptTenancyAgreementUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserTenancyAgreementRepositoryImpl)
    private userTenancyAgreementRepositoryImpl: UserTenancyAgreementRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { id, status } = data.body;

    const userAgreement = await this.userTenancyAgreementRepositoryImpl.update({
      id: Number(id),
      status: status,
    });

    return { record: userAgreement };
  }
}
