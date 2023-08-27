import { PaymentRepositoryImpl } from '@db/infrastructure/repositories/payments-repository';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerPaymentsViewListReqBodyDto,
  OwnerPaymentsViewListReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerPaymentsViewListReqBodyDto;
  query: OwnerPaymentsViewListReqQueryDto;
};

export class OwnerPaymentsViewListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PaymentRepositoryImpl)
    private paymentRepositoryImpl: PaymentRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const paginatedPayments = await this.paymentRepositoryImpl.getAllPaginated({
      findOptions: {
        where: {
          paymentCategoryId: query.paymentCategoryId,
        },
      },
    });

    return paginatedPayments;
  }
}
