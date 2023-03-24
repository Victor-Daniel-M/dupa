import { OwnerAssignPropertyDto } from '@core/adapter/dtos/owner.controllers.dto';
import { TYPES } from '@core/domain/types';
import { UserPropertyRepositoryImpl } from '@core/infrastructure/repositories/user-properties-repository';
import { Inject } from '@nestjs/common';

export class AssignPropertyByOwnerUsecase {
  constructor(
    @Inject(TYPES.repositories.UserPropertyRepositoryImpl)
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
