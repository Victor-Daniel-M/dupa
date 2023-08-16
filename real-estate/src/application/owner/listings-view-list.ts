import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerListingsViewListReqBodyDto,
  OwnerListingsViewListReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerListingsViewListReqBodyDto;
  query: OwnerListingsViewListReqQueryDto;
};

export class OwnerListingsViewListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const properties = await this.propertyRepositoryImpl.getAllPaginated({});

    return properties;
  }
}
