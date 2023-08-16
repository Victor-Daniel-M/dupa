import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerServiceProvidersApplyForServiceReqBodyDto,
  OwnerServiceProvidersApplyForServiceReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerServiceProvidersApplyForServiceReqBodyDto;
  query: OwnerServiceProvidersApplyForServiceReqQueryDto;
};

export class OwnerServiceProvidersApplyForServiceUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for service providers applying for services here

    return {};
  }
}
