import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerRealtorsRequestToRepresentReqBodyDto,
  OwnerRealtorsRequestToRepresentReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerRealtorsRequestToRepresentReqBodyDto;
  query: OwnerRealtorsRequestToRepresentReqQueryDto;
};

export class OwnerRealtorsRequestToRepresentUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for requesting representation by realtors here

    return {};
  }
}
