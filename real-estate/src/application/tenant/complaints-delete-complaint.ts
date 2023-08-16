import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantComplaintsDeleteComplaintReqBodyDto,
  TenantComplaintsDeleteComplaintReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantComplaintsDeleteComplaintReqBodyDto;
  query: TenantComplaintsDeleteComplaintReqQueryDto;
};

export class TenantComplaintsDeleteComplaintUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for deleting complaints here

    return {};
  }
}
