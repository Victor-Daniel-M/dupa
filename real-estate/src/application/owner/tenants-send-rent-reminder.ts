import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerTenantsSendRentReminderReqBodyDto,
  OwnerTenantsSendRentReminderReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerTenantsSendRentReminderReqBodyDto;
  query: OwnerTenantsSendRentReminderReqQueryDto;
};

export class OwnerTenantsSendRentReminderUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for sending rent reminders to tenants here

    return {};
  }
}
