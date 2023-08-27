import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerListingsViewListReqBodyDto,
  OwnerListingsViewListReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedGetUserPropertiesUsecase } from '../general/advanced-get-user-properties';

type ExecuteInput = {
  body: OwnerListingsViewListReqBodyDto;
  query: OwnerListingsViewListReqQueryDto;
};

export class OwnerListingsViewListUsecase {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.AdvancedGetUserPropertiesUsecase)
    private advancedGetUserPropertiesUsecase: AdvancedGetUserPropertiesUsecase,
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { query } = data;

    const userProperties = await this.advancedGetUserPropertiesUsecase.execute({
      query: {
        userId: query.userId,
      },
    });

    const userPropertiesIds = userProperties.records.map((record) => record.id);

    const properties = await this.propertyRepositoryImpl.getIn({
      key: 'id',
      list: userPropertiesIds,
    });

    return properties;
  }
}
