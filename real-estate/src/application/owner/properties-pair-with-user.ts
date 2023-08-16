import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerPropertiesPairWithUserReqBodyDto,
  OwnerPropertiesPairWithUserReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerPropertiesPairWithUserReqBodyDto;
  query: OwnerPropertiesPairWithUserReqQueryDto;
};

export class OwnerPropertiesPairWithUserUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for pairing properties with a user here

    return {};
  }
}
