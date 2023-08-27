import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerRealtorsConnectWithRealtorsReqBodyDto,
  OwnerRealtorsConnectWithRealtorsReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerRealtorsConnectWithRealtorsReqBodyDto;
  query: OwnerRealtorsConnectWithRealtorsReqQueryDto;
};

export class OwnerRealtorsConnectWithRealtorsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for connecting with realtors here

    return {};
  }
}
