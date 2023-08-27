import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantServicesApplyForServiceReqBodyDto,
  TenantServicesApplyForServiceReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantServicesApplyForServiceReqBodyDto;
  query: TenantServicesApplyForServiceReqQueryDto;
};

export class TenantServicesApplyForServiceUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for applying for services here

    return {};
  }
}