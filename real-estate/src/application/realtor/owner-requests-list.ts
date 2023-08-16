import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorViewOwnerRequestListReqBodyDto,
  RealtorViewOwnerRequestListReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorViewOwnerRequestListReqBodyDto;
  query: RealtorViewOwnerRequestListReqQueryDto;
};

export class RealtorViewOwnerRequestListUsecase {
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

    return { records: applications };
  }
}
