import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  ServiceProviderApplicationsReactUsecase,
  ServiceProviderRegisterUsecase,
  ServiceProviderServiceCategoriesListUsecase,
  ServiceProviderServicesApplyUsecase,
  ServiceProviderServicesCreateUsecase,
  ServiceProviderSubscriptionsInitiateTerminateUsecase,
  ServiceProviderSubscriptionsListUsecase,
} from './index'; // Update the path

const serviceProviderApplicationsReactUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ServiceProviderApplicationsReactUsecase,
  useClass: ServiceProviderApplicationsReactUsecase,
};

const serviceProviderRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ServiceProviderRegisterUsecase,
  useClass: ServiceProviderRegisterUsecase,
};

const serviceProviderServiceCategoriesListUsecase = {
  provide:
    REAL_ESTATE_TYPES.useCases.ServiceProviderServiceCategoriesListUsecase,
  useClass: ServiceProviderServiceCategoriesListUsecase,
};

const serviceProviderServicesApplyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ServiceProviderServicesApplyUsecase,
  useClass: ServiceProviderServicesApplyUsecase,
};

const serviceProviderServicesCreateUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ServiceProviderServicesCreateUsecase,
  useClass: ServiceProviderServicesCreateUsecase,
};

const serviceProviderSubscriptionsInitiateTerminateUsecase = {
  provide:
    REAL_ESTATE_TYPES.useCases
      .ServiceProviderSubscriptionsInitiateTerminateUsecase,
  useClass: ServiceProviderSubscriptionsInitiateTerminateUsecase,
};

const serviceProviderSubscriptionsListUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.ServiceProviderSubscriptionsListUsecase,
  useClass: ServiceProviderSubscriptionsListUsecase,
};

export const serviceProviderUsecaseProviders = [
  serviceProviderApplicationsReactUsecase,
  serviceProviderRegisterUsecase,
  serviceProviderServiceCategoriesListUsecase,
  serviceProviderServicesApplyUsecase,
  serviceProviderServicesCreateUsecase,
  serviceProviderSubscriptionsInitiateTerminateUsecase,
  serviceProviderSubscriptionsListUsecase,
];
