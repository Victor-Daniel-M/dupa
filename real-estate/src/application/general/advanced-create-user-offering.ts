import { OwnerAssignOfferingDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserOfferingRepositoryImpl } from '@db/infrastructure/repositories/user-offerings-repository';
import { Inject } from '@nestjs/common';
import { UserOffering } from '@db/domain/entities';

export class AdvancedCreateUserOfferingUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserOfferingRepositoryImpl)
    private userOfferingRepository: UserOfferingRepositoryImpl,
  ) {}

  async execute(data: { body: OwnerAssignOfferingDto }) {
    const { offeringId, userId, userOfferingType } = data.body;

    const pagedUserOfferings =
      await this.userOfferingRepository.getAllPaginated<UserOffering>({
        findOptions: {
          where: {
            userId,
            offeringId,
          },
        },
      });

    const userOfferings = pagedUserOfferings.records as UserOffering[];

    if (userOfferings.length > 0) {
      for (let index = 0; index < userOfferings.length; index++) {
        const userOffering = userOfferings[index];

        await this.userOfferingRepository.deleteBy({
          key: 'id',
          value: userOffering.id,
        });
      }
    }

    return await this.userOfferingRepository.create({
      offeringId,
      userId,
      userOfferingType,
    });
  }
}
