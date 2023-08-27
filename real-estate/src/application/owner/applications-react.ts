import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerReactToApplicationReqBodyDto,
  OwnerReactToApplicationReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerReactToApplicationReqBodyDto;
  query: OwnerReactToApplicationReqQueryDto;
};

export class OwnerApplicationsReactUsecase {
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

    return { records: visitOfferings };
  }
}
