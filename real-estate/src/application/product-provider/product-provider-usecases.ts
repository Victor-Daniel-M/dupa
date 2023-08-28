import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  ProductProviderApplicationsListUsecase,
  ProductProviderLoginUsecase,
  ProductProviderRegisterUsecase,
} from './index';

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
  productProviderApplicationsListUsecase,
  productProviderLoginUsecase,
  productProviderRegisterUsecase,
];
