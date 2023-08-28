import { BusinessOfferingCategory } from '@db/domain/entities/businessOfferingCategory';
import { BusinessRepositoryImpl } from '@db/infrastructure/repositories/business-repository';
import { BusinessOfferingCategoryRepositoryImpl } from '@db/infrastructure/repositories/businesses-offering-categories';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerGetProvidersByOfferingCategoryReqBodyDto,
  OwnerGetProvidersByOfferingCategoryReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerGetProvidersByOfferingCategoryReqBodyDto;
  query: OwnerGetProvidersByOfferingCategoryReqQueryDto;
};

export class OwnerGetProvidersByOfferingCategoryUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.BusinessOfferingCategoryRepositoryImpl)
    private businessOfferingCategoryRepositoryImpl: BusinessOfferingCategoryRepositoryImpl,
    @Inject(DB_TYPES.repositories.BusinessRepositoryImpl)
    private businessRepositoryImpl: BusinessRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const businessesOfferingCategory =
      await this.businessOfferingCategoryRepositoryImpl.getAllPaginated<BusinessOfferingCategory>(
        {
          findOptions: {
            where: {
              offeringCategoryId: query.offeringCategoryId,
            },
          },
        },
      );

    const businesses = await this.businessRepositoryImpl.getIn({
      key: 'id',
      list: businessesOfferingCategory.records.map((item) => item.businessId),
    });

    return { records: businesses };
  }
}
