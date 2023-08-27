import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { UserPropertyRepositoryImpl } from '@db/infrastructure/repositories/user-properties-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerPropertiesPairWithUserReqBodyDto,
  OwnerPropertiesPairWithUserReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerPropertiesPairWithUserReqBodyDto;
  query: OwnerPropertiesPairWithUserReqQueryDto;
};

export class OwnerPropertiesPairWithUserUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserPropertyRepositoryImpl)
    private userPropertyRepositoryImpl: UserPropertyRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const userProperty = await this.userPropertyRepositoryImpl.create(body);

    return { record: userProperty };
  }
}
