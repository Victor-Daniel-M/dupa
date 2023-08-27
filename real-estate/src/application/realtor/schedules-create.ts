import { MessageRepositoryImpl } from '@db/infrastructure/repositories/messages-repository';
import { ScheduleRepositoryImpl } from '@db/infrastructure/repositories/schedules-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorCreateScheduleReqBodyDto,
  RealtorCreateScheduleReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorCreateScheduleReqBodyDto;
  query: RealtorCreateScheduleReqQueryDto;
};

export class RealtorCreateScheduleUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ScheduleRepositoryImpl)
    private scheduleRepositoryImpl: ScheduleRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {
      fromEntityId,
      fromEntityName,
      toEntityId,
      toEntityName,
      scheduleType,
      openAt,
      closeAt,
      dayOfWeek,
    } = data.body;
    const {} = data.query;

    const createdSchedule = await this.scheduleRepositoryImpl.create({
      fromEntityId,
      fromEntityName,
      toEntityId,
      toEntityName,
      scheduleType,
      openAt,
      closeAt,
      dayOfWeek,
    });

    return { record: createdSchedule };
  }
}
