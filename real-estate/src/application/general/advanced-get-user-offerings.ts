import {
  GetUserOfferingsReqQueryDto,
  OwnerAssignOfferingDto,
} from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserOfferingRepositoryImpl } from '@db/infrastructure/repositories/user-offerings-repository';
import { Inject } from '@nestjs/common';
import { UserOffering } from '@db/domain/entities';

export class AdvancedGetUserOfferingsUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserOfferingRepositoryImpl)
    private userOfferingRepository: UserOfferingRepositoryImpl,
  ) {}

  async execute(data: { query: GetUserOfferingsReqQueryDto }) {
    const { userId } = data.query;

    const pagedUserOfferings =
      await this.userOfferingRepository.getAllPaginated<UserOffering>({
        findOptions: {
          where: {
            userId: Number(userId),
          },
        },
      });

    return pagedUserOfferings;
  }
}
