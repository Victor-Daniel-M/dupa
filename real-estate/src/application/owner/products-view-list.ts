import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerProductsViewListReqBodyDto,
  OwnerProductsViewListReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerProductsViewListReqBodyDto;
  query: OwnerProductsViewListReqQueryDto;
};

export class OwnerProductsViewListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for viewing a list of products here

    return {};
  }
}
