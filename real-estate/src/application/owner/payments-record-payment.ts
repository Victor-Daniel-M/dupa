import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerPaymentsRecordPaymentReqBodyDto,
  OwnerPaymentsRecordPaymentReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerPaymentsRecordPaymentReqBodyDto;
  query: OwnerPaymentsRecordPaymentReqQueryDto;
};

export class OwnerPaymentsRecordPaymentUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for recording payments here

    return {};
  }
}
