import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
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
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for updating complaints here

    return {};
  }
}
