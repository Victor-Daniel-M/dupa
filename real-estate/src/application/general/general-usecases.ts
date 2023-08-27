import { REAL_ESTATE_TYPES } from '@real-estate/types';
import { AdvancedCreateUserPropertyUsecase } from './index'; // Update the path
import { AdvancedGetUserPropertiesUsecase } from './advanced-get-user-properties';

const advancedCreateUserPropertyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.AdvancedCreateUserPropertyUsecase,
  useClass: AdvancedCreateUserPropertyUsecase,
};

const advancedGetUserPropertiesUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.AdvancedGetUserPropertiesUsecase,
  useClass: AdvancedGetUserPropertiesUsecase,
};

export const generalUsecases = [
  advancedCreateUserPropertyUsecase,
  advancedGetUserPropertiesUsecase,
];
