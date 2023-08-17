import { OwnerAssignPropertyDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { DB_TYPES } from '@db/types';
import { UserPropertyRepositoryImpl } from '@db/infrastructure/repositories/user-properties-repository';
import { Inject } from '@nestjs/common';

export class OwnerAssignPropertyUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.UserPropertyRepositoryImpl)
    private userPropertyRepository: UserPropertyRepositoryImpl,
  ) {}

  async execute(data: { body: OwnerAssignPropertyDto }) {
    const { propertyId, userId, userPropertyType } = data.body;

    await this.userPropertyRepository.deleteBy({
      key: 'userPropertyType',
      value: 'BROKER',
    });

    return await this.userPropertyRepository.create({
      propertyId,
      userId,
      userPropertyType,
    });
  }
}
