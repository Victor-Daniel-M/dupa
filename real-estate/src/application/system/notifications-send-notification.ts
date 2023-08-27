import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SystemNotificationsSendNotificationReqBodyDto,
  SystemNotificationsSendNotificationReqQueryDto,
} from '@real-estate/adapter/dtos/system.controllers.dto';

type ExecuteInput = {
  body: SystemNotificationsSendNotificationReqBodyDto;
  query: SystemNotificationsSendNotificationReqQueryDto;
};

export class SystemNotificationsSendNotificationUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for sending notifications here

    return {};
  }
}
