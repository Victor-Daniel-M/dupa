import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorViewPropertyListReqBodyDto,
  RealtorViewPropertyListReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedGetUserPropertiesUsecase } from '../general/advanced-get-user-properties';
import { Property, UserProperty } from '@db/domain/entities';

type ExecuteInput = {
  body: RealtorViewPropertyListReqBodyDto;
  query: RealtorViewPropertyListReqQueryDto;
};

export class RealtorViewPropertyListUsecase {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.AdvancedGetUserPropertiesUsecase)
    private advancedGetUserPropertiesUsecase: AdvancedGetUserPropertiesUsecase,
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { userId } = data.query;
    let properties: Property[] = [];

    const userProperties = await this.advancedGetUserPropertiesUsecase.execute({
      query: {
        userId: userId,
      },
    });

    const propertiesIds = (userProperties.records as UserProperty[]).map(
      (record) => record.propertyId,
    );

    if (propertiesIds.length) {
      properties = await this.propertyRepositoryImpl.getIn({
        key: 'id',
        list: propertiesIds,
      });
    }

    return { records: properties };
  }
}
