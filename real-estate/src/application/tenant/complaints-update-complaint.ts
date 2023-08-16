import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantComplaintsUpdateComplaintReqBodyDto,
  TenantComplaintsUpdateComplaintReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantComplaintsUpdateComplaintReqBodyDto;
  query: TenantComplaintsUpdateComplaintReqQueryDto;
};

export class TenantComplaintsUpdateComplaintUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for updating complaints here

    return {};
  }
}
