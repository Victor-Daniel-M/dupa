import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerProductsApplyForProductReqBodyDto,
  OwnerProductsApplyForProductReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerProductsApplyForProductReqBodyDto;
  query: OwnerProductsApplyForProductReqQueryDto;
};

export class OwnerProductsApplyForProductUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private propertyRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    // Implement your logic for applying for a product here

    return {};
  }
}
