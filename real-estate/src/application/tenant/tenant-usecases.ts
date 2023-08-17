import { REAL_ESTATE_TYPES } from '@real-estate/types';
import {
  TenantsLoginUsecase,
  TenantsRegisterUsecase,
  TenantComplaintsCreateComplaintUsecase,
  TenantComplaintsDeleteComplaintUsecase,
  TenantComplaintsUpdateComplaintUsecase,
  TenantPaymentsMakePaymentUsecase,
  TenantProductsApplyForProductUsecase,
  TenantProductsListProductsUsecase,
  TenantServiceProvidersListServiceProvidersUsecase,
  TenantServicesApplyForServiceUsecase,
  TenantServicesListServicesUsecase,
  TenantTenanciesEndTenancyUsecase,
  TenantTenanciesListAgreementsUsecase,
  TenantTenanciesViewAgreementUsecase,
} from './index'; // Update the path

const tenantAuthLoginUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantsLoginUsecase,
  useClass: TenantsLoginUsecase,
};

const tenantAuthRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantsRegisterUsecase,
  useClass: TenantsRegisterUsecase,
};

const tenantComplaintsCreateComplaintUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantComplaintsCreateComplaintUsecase,
  useClass: TenantComplaintsCreateComplaintUsecase,
};

const tenantComplaintsDeleteComplaintUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantComplaintsDeleteComplaintUsecase,
  useClass: TenantComplaintsDeleteComplaintUsecase,
};

const tenantComplaintsUpdateComplaintUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantComplaintsUpdateComplaintUsecase,
  useClass: TenantComplaintsUpdateComplaintUsecase,
};

const tenantPaymentsMakePaymentUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantPaymentsMakePaymentUsecase,
  useClass: TenantPaymentsMakePaymentUsecase,
};

const tenantProductsApplyForProductUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantProductsApplyForProductUsecase,
  useClass: TenantProductsApplyForProductUsecase,
};

const tenantProductsListProductsUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantProductsListProductsUsecase,
  useClass: TenantProductsListProductsUsecase,
};

const tenantServiceProvidersListServiceProvidersUsecase = {
  provide:
    REAL_ESTATE_TYPES.useCases
      .TenantServiceProvidersListServiceProvidersUsecase,
  useClass: TenantServiceProvidersListServiceProvidersUsecase,
};

const tenantServicesApplyForServiceUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantServicesApplyForServiceUsecase,
  useClass: TenantServicesApplyForServiceUsecase,
};

const tenantServicesListServicesUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantServicesListServicesUsecase,
  useClass: TenantServicesListServicesUsecase,
};

const tenantTenanciesEndTenancyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantTenanciesEndTenancyUsecase,
  useClass: TenantTenanciesEndTenancyUsecase,
};

const tenantTenanciesListAgreementsUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantTenanciesListAgreementsUsecase,
  useClass: TenantTenanciesListAgreementsUsecase,
};

const tenantTenanciesViewAgreementUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.TenantTenanciesViewAgreementUsecase,
  useClass: TenantTenanciesViewAgreementUsecase,
};

export const tenantUsecaseProviders = [
  tenantAuthLoginUsecase,
  tenantAuthRegisterUsecase,
  tenantComplaintsCreateComplaintUsecase,
  tenantComplaintsDeleteComplaintUsecase,
  tenantComplaintsUpdateComplaintUsecase,
  tenantPaymentsMakePaymentUsecase,
  tenantProductsApplyForProductUsecase,
  tenantProductsListProductsUsecase,
  tenantServiceProvidersListServiceProvidersUsecase,
  tenantServicesApplyForServiceUsecase,
  tenantServicesListServicesUsecase,
  tenantTenanciesEndTenancyUsecase,
  tenantTenanciesListAgreementsUsecase,
  tenantTenanciesViewAgreementUsecase,
];
