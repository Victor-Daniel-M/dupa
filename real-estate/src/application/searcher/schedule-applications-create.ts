import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  SearcherCreateScheduleApplicationReqBodyDto,
  SearcherCreateScheduleApplicationReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';

type ExecuteInput = {
  body: SearcherCreateScheduleApplicationReqBodyDto;
  query: SearcherCreateScheduleApplicationReqQueryDto;
};

export class SearcherCreateScheduleApplicationUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { refEntityId, userId } = data.body;
    const createdApplication = await this.applicationRepositoryImpl.create({
      applicationType: 'REQUEST_TO_VISIT',
      userId,
      refEntityId,
      // TODO: enforce types of entities
      refEntityName: 'SCHEDULES',
    });
    return { record: createdApplication };
  }
}
