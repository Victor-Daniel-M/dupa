import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  ProviderApplyForOfferingCategoryReqBodyDto,
  ProviderApplyForOfferingCategoryReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

type ExecuteInput = {
  body: ProviderApplyForOfferingCategoryReqBodyDto;
  query: ProviderApplyForOfferingCategoryReqQueryDto;
};

export class ServiceProviderApplyForOfferingCategoryUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body } = data;
    const createdApplication = await this.applicationRepositoryImpl.create({
      ...body,
      applicationType: 'REQUEST_TO_PROVIDE_OFFERING',
    });
    return { record: createdApplication };
  }
}
