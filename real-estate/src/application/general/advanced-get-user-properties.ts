import {
  GetUserPropertiesReqQueryDto,
  OwnerAssignPropertyDto,
} from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserPropertyRepositoryImpl } from '@db/infrastructure/repositories/user-properties-repository';
import { Inject } from '@nestjs/common';
import { UserProperty } from '@db/domain/entities';

export class AdvancedGetUserPropertiesUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserPropertyRepositoryImpl)
    private userPropertyRepository: UserPropertyRepositoryImpl,
  ) {}

  async execute(data: { query: GetUserPropertiesReqQueryDto }) {
    const { userId } = data.query;

    const pagedUserProperties =
      await this.userPropertyRepository.getAllPaginated<UserProperty>({
        findOptions: {
          where: {
            userId: Number(userId),
          },
        },
      });

    return pagedUserProperties;
  }
}
