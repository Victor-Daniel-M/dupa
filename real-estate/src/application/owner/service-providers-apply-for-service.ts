import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
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
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for service providers applying for services here

    return {};
  }
}
