import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedCreateUserOfferingUsecase } from './index'; // Update the path
import { AdvancedGetUserOfferingsUsecase } from './advanced-get-user-offerings';

const advancedCreateUserOfferingUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.AdvancedCreateUserOfferingUsecase,
  useClass: AdvancedCreateUserOfferingUsecase,
};

const advancedGetUserOfferingsUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.AdvancedGetUserOfferingsUsecase,
  useClass: AdvancedGetUserOfferingsUsecase,
};

export const generalUsecases = [
  advancedCreateUserOfferingUsecase,
  advancedGetUserOfferingsUsecase,
];
