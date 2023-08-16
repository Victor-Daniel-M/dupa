import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorConnectWithOwnersReqBodyDto,
  RealtorConnectWithOwnersReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorConnectWithOwnersReqBodyDto;
  query: RealtorConnectWithOwnersReqQueryDto;
};

export class RealtorConnectWithOwnersUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    return {};
  }
}
