import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { UserOfferingRepositoryImpl } from '@db/infrastructure/repositories/user-offerings-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerOfferingsPairWithUserReqBodyDto,
  OwnerOfferingsPairWithUserReqQueryDto,
} from '@real-estate/adapter/dtos/owner.controllers.dto';

type ExecuteInput = {
  body: OwnerOfferingsPairWithUserReqBodyDto;
  query: OwnerOfferingsPairWithUserReqQueryDto;
};

export class OwnerOfferingsPairWithUserUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserOfferingRepositoryImpl)
    private userOfferingRepositoryImpl: UserOfferingRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const { body, query } = data;

    const userOffering = await this.userOfferingRepositoryImpl.create(body);

    return { record: userOffering };
  }
}
