import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  AdminCountsGraphsReqBodyDto,
  AdminCountsGraphsReqQueryDto,
} from '@real-estate/adapter/dtos/admin.controllers.dto';

type ExecuteInput = {
  body: AdminCountsGraphsReqBodyDto;
  query: AdminCountsGraphsReqQueryDto;
};

export class AdminCountsGraphsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for generating graphs here

    return {};
  }
}
