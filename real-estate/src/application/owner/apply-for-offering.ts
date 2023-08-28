import { ApplicationRepositoryImpl } from '@db/infrastructure/repositories/applications-repository';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { UserRepositoryImpl } from '@db/infrastructure/repositories/users-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  OwnerApplyForOfferingReqBodyDto,
  OwnerApplyForOfferingReqQueryDto,
} from '@real-estate/adapter/dtos/searcher.controllers.dto';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { OwnerGetProvidersByOfferingCategoryUsecase } from './providers-by-offering-category';

type ExecuteInput = {
  body: OwnerApplyForOfferingReqBodyDto;
  query: OwnerApplyForOfferingReqQueryDto;
};

export class OwnerApplyForOfferingUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ApplicationRepositoryImpl)
    private applicationRepositoryImpl: ApplicationRepositoryImpl,
    @Inject(
      REAL_ESTATE_TYPES.useCases.OwnerGetProvidersByOfferingCategoryUsecase,
    )
    private ownerGetProvidersByOfferingCategoryUsecase: OwnerGetProvidersByOfferingCategoryUsecase,
  ) {}

  async execute(data: ExecuteInput) {
    const { refEntityId, userId } = data.body;
    const createdApplication = await this.applicationRepositoryImpl.create({
      applicationType: 'REQUEST_OFFERING',
      userId,
      refEntityId,
      // TODO: enforce types of entities
      refEntityName: 'OFFERING_CATEGORY',
    });

    const { records: businesses } =
      await this.ownerGetProvidersByOfferingCategoryUsecase.execute({
        body: {},
        query: {
          offeringCategoryId: refEntityId,
        },
      });

    for (let index = 0; index < businesses.length; index++) {
      const business = businesses[index];

      await this.applicationRepositoryImpl.create({
        applicationType: 'REQUEST_OFFERING',
        userId,
        refEntityId,
        // TODO: enforce types of entities
        refEntityName: 'OFFERING_CATEGORY',
        businessId: business.id,
      });
    }

    return { record: createdApplication };
  }
}
