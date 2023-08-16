import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SystemCommissionsSplitCommissionReqBodyDto,
  SystemCommissionsSplitCommissionReqQueryDto,
} from '@real-estate/adapter/dtos/system.controllers.dto';

type ExecuteInput = {
  body: SystemCommissionsSplitCommissionReqBodyDto;
  query: SystemCommissionsSplitCommissionReqQueryDto;
};

export class SystemCommissionsSplitCommissionUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for splitting commissions here

    return {};
  }
}
