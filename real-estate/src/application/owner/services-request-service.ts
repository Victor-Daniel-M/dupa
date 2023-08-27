import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerServicesRequestServiceReqBodyDto,
  OwnerServicesRequestServiceReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerServicesRequestServiceReqBodyDto;
  query: OwnerServicesRequestServiceReqQueryDto;
};

export class OwnerServicesRequestServiceUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for requesting services here

    return {};
  }
}
