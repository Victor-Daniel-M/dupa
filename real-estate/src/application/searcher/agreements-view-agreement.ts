import { TenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/tenancy-agreements-repository';
import { UserTenancyAgreementRepositoryImpl } from '@db/infrastructure/repositories/user-tenancy-agreements-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SearcherViewTenancyAgreementReqBodyDto,
  SearcherViewTenancyAgreementReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';

type ExecuteInput = {
  body: SearcherViewTenancyAgreementReqBodyDto;
  query: SearcherViewTenancyAgreementReqQueryDto;
};

export class SearcherViewTenancyAgreementUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.TenancyAgreementRepositoryImpl)
    private tenancyAgreementRepositoryImpl: TenancyAgreementRepositoryImpl,
    @Inject(DB_TYPES.repositories.UserTenancyAgreementRepositoryImpl)
    private userTenancyAgreementRepositoryImpl: UserTenancyAgreementRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { id } = data.query;

    const userAgreement =
      await this.userTenancyAgreementRepositoryImpl.getOneBy({
        key: 'id',
        value: Number(id),
      });

    const agreement = await this.tenancyAgreementRepositoryImpl.getOneBy({
      key: 'id',
      value: userAgreement.tenancyAgreementId,
    });

    return { record: agreement };
  }
}
