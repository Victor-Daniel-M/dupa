import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  ServiceProviderViewApplicationsListReqBodyDto,
  ServiceProviderViewApplicationsListReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

type ExecuteInput = {
  body: ServiceProviderViewApplicationsListReqBodyDto;
  query: ServiceProviderViewApplicationsListReqQueryDto;
};

export class ServiceProviderApplicationsListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    const applications = await this.applicationRepositoryImpl.getAllPaginated(
      {},
    );

    return applications;
  }
}
