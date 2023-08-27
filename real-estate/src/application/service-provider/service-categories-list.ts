import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  ServiceProviderServiceCategoriesListReqBodyDto,
  ServiceProviderServiceCategoriesListReqQueryDto,
} from '@real-estate/adapter/dtos/provider.controllers.dto';

type ExecuteInput = {
  body: ServiceProviderServiceCategoriesListReqBodyDto;
  query: ServiceProviderServiceCategoriesListReqQueryDto;
};

export class ServiceProviderServiceCategoriesListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private offeringRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for listing service categories here

    return {};
  }
}
