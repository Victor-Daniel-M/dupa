import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorHandoverOfferingReqBodyDto,
  RealtorHandoverOfferingReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorHandoverOfferingReqBodyDto;
  query: RealtorHandoverOfferingReqQueryDto;
};

export class RealtorHandoverOfferingUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private userRepositoryImpl: UserRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    return {};
  }
}