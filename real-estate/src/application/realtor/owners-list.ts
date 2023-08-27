import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorViewOwnerListReqBodyDto,
  RealtorViewOwnerListReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorViewOwnerListReqBodyDto;
  query: RealtorViewOwnerListReqQueryDto;
};

export class RealtorViewOwnerListUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private usersRepositoryImpl: UserRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {} = data.body;
    const {} = data.query;

    const visitOfferings = await this.usersRepositoryImpl.getAllPaginated({});

    return { records: visitOfferings };
  }
}
