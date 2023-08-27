import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantServicesListServicesReqBodyDto,
  TenantServicesListServicesReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantServicesListServicesReqBodyDto;
  query: TenantServicesListServicesReqQueryDto;
};

export class TenantServicesListServicesUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing services here

    return {};
  }
}
