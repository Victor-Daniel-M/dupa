import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerResolveComplaintsReqBodyDto,
  OwnerResolveComplaintsReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerResolveComplaintsReqBodyDto;
  query: OwnerResolveComplaintsReqQueryDto;
};

export class OwnerComplaintsResolveUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.OfferingRepositoryImpl)
    private applicationRepositoryImpl: OfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    const visitOfferings = await this.applicationRepositoryImpl.getAllPaginated(
      {},
    );

    return {};
  }
}
