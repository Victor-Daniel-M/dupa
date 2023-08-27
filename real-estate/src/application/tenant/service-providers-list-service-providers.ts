import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantServiceProvidersListServiceProvidersReqBodyDto,
  TenantServiceProvidersListServiceProvidersReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantServiceProvidersListServiceProvidersReqBodyDto;
  query: TenantServiceProvidersListServiceProvidersReqQueryDto;
};

export class TenantServiceProvidersListServiceProvidersUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing service providers here

    return {};
  }
}
