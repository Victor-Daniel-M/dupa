import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
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

export class OwnerLoginUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.PropertyRepositoryImpl)
    private applicationRepositoryImpl: PropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    const visitPropertys = await this.applicationRepositoryImpl.getAllPaginated(
      {},
    );

    return { records: visitPropertys };
  }
}
