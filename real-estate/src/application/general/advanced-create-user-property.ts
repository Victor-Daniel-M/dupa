import { OwnerAssignPropertyDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserPropertyRepositoryImpl } from '@db/infrastructure/repositories/user-properties-repository';
import { Inject } from '@nestjs/common';
import { UserProperty } from '@db/domain/entities';

export class AdvancedCreateUserPropertyUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserPropertyRepositoryImpl)
    private userPropertyRepository: UserPropertyRepositoryImpl,
  ) {}

  async execute(data: { body: OwnerAssignPropertyDto }) {
    const { propertyId, userId, userPropertyType } = data.body;

    const pagedUserProperties =
      await this.userPropertyRepository.getAllPaginated<UserProperty>({
        findOptions: {
          where: {
            userId,
            propertyId,
          },
        },
      });

    const userProperties = pagedUserProperties.records as UserProperty[];

    if (userProperties.length > 0) {
      for (let index = 0; index < userProperties.length; index++) {
        const userProperty = userProperties[index];

        await this.userPropertyRepository.deleteBy({
          key: 'id',
          value: userProperty.id,
        });
      }
    }

    return await this.userPropertyRepository.create({
      propertyId,
      userId,
      userPropertyType,
    });
  }
}
