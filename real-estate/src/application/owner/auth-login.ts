import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerLoginReqBodyDto,
  OwnerLoginReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerLoginReqBodyDto;
  query: OwnerLoginReqQueryDto;
};

export class OwnerAuthLoginUsecase {
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
