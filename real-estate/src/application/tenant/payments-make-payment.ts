import { PaymentRepositoryImpl } from '@db/infrastructure/repositories/payments-repository';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  TenantPaymentsMakePaymentReqBodyDto,
  TenantPaymentsMakePaymentReqQueryDto,
} from '@real-estate/adapter/dtos/tenant.controllers.dto';

type ExecuteInput = {
  body: TenantPaymentsMakePaymentReqBodyDto;
  query: TenantPaymentsMakePaymentReqQueryDto;
};

export class TenantPaymentsMakePaymentUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PaymentRepositoryImpl)
    private paymentRepositoryImpl: PaymentRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const payment = await this.paymentRepositoryImpl.create(body);

    return { record: payment };
  }
}
