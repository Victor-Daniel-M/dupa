import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorRequestToRepresentReqBodyDto,
  RealtorRequestToRepresentReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorRequestToRepresentReqBodyDto;
  query: RealtorRequestToRepresentReqQueryDto;
};

export class RealtorRequestToRepresentUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { applicationType, refEntityId, refEntityName, userId } = data.body;
    const { businessId } = data.query;

    const createdApplication = await this.applicationRepositoryImpl.create({
      applicationType: applicationType,
      refEntityId,
      refEntityName,
      userId,
    });

    return { record: createdApplication };
  }
}
