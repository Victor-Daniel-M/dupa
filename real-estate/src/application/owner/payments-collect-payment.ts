import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerPaymentsCollectPaymentReqBodyDto,
  OwnerPaymentsCollectPaymentReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerPaymentsCollectPaymentReqBodyDto;
  query: OwnerPaymentsCollectPaymentReqQueryDto;
};

export class OwnerPaymentsCollectPaymentUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for collecting payments here

    return {};
  }
}
