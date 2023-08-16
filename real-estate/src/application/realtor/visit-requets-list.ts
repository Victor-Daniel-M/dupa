import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorViewVisitRequestsReqBodyDto,
  RealtorViewVisitRequestsReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorViewVisitRequestsReqBodyDto;
  query: RealtorViewVisitRequestsReqQueryDto;
};

export class RealtorViewVisitRequestsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    const visitApplications =
      await this.applicationRepositoryImpl.getAllPaginated({});

    return { records: visitApplications };
  }
}
