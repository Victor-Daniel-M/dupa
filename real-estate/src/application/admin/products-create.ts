import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  AdminCreateProductReqBodyDto,
  AdminCreateProductReqQueryDto,
} from '@real-estate/adapter/dtos/admin.controllers.dto';

type ExecuteInput = {
  body: AdminCreateProductReqBodyDto;
  query: AdminCreateProductReqQueryDto;
};

export class AdminCreateProductUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UsersRepositoryImpl)
    private userRepositoryImpl: UserRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    return {};
  }
}
