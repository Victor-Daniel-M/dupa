import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  ProductProviderApplicationsApplyUsecase,
  ProductProviderApplicationsListUsecase,
  ProductProviderLoginUsecase,
  ProductProviderRegisterUsecase,
} from './index'; // Update the path

const productProviderApplicationsApplyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ProductProviderApplicationsApplyUsecase,
  useClass: ProductProviderApplicationsApplyUsecase,
};

const productProviderApplicationsListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ProductProviderApplicationsListUsecase,
  useClass: ProductProviderApplicationsListUsecase,
};

const productProviderLoginUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ProductProviderLoginUsecase,
  useClass: ProductProviderLoginUsecase,
};

const productProviderRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ProductProviderRegisterUsecase,
  useClass: ProductProviderRegisterUsecase,
};

export const productProviderUsecaseProviders = [
  productProviderApplicationsApplyUsecase,
  productProviderApplicationsListUsecase,
  productProviderLoginUsecase,
  productProviderRegisterUsecase,
];
