import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  AdminCountsViewReqBodyDto,
  AdminCountsViewReqQueryDto,
} from '@real-estate/adapter/dtos/admin.controllers.dto';

type ExecuteInput = {
  body: AdminCountsViewReqBodyDto;
  query: AdminCountsViewReqQueryDto;
};

export class StatisticsCountsGraphsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for viewing counts here

    return {};
  }
}
