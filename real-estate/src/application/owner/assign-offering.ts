import { OwnerAssignOfferingDto } from 'real-estate/src/adapter/dtos/owner.controllers.dto';
import { Inject } from '@nestjs/common';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedCreateUserOfferingUsecase } from '../general';

export class OwnerAssignOfferingUsecase {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.AdvancedCreateUserOfferingUsecase)
    private advancedCreateUserOfferingUsecase: AdvancedCreateUserOfferingUsecase,
  ) {}

  async execute(data: { body: OwnerAssignOfferingDto }) {
    const { offeringId, userId, userOfferingType } = data.body;

    return await this.advancedCreateUserOfferingUsecase.execute({
      body: {
        offeringId,
        userId,
        userOfferingType,
      },
    });
  }
}
