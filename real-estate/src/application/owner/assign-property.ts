import { OwnerAssignPropertyDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { Inject } from '@nestjs/common';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedCreateUserPropertyUsecase } from '../general';

export class OwnerAssignPropertyUsecase {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.AdvancedCreateUserPropertyUsecase)
    private advancedCreateUserPropertyUsecase: AdvancedCreateUserPropertyUsecase,
  ) {}

  async execute(data: { body: OwnerAssignPropertyDto }) {
    const { propertyId, userId, userPropertyType } = data.body;

    return await this.advancedCreateUserPropertyUsecase.execute({
      body: {
        propertyId,
        userId,
        userPropertyType,
      },
    });
  }
}
