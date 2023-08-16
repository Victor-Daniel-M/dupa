import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SystemPaymentsProcessPaymentReqBodyDto,
  SystemPaymentsProcessPaymentReqQueryDto,
} from '@real-estate/adapter/dtos/system.controllers.dto';

type ExecuteInput = {
  body: SystemPaymentsProcessPaymentReqBodyDto;
  query: SystemPaymentsProcessPaymentReqQueryDto;
};

export class SystemPaymentsProcessPaymentUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for processing payments here

    return {};
  }
}
