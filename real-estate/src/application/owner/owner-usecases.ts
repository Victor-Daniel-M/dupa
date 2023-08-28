import {
  OwnerApplicationsListUsecase,
  OwnerApplicationsReactUsecase,
  OwnerAssignOfferingUsecase,
  OwnerAuthLoginUsecase,
  OwnerComplaintsListUsecase,
  OwnerComplaintsResolveUsecase,
  OwnerListingsViewActivityUsecase,
  OwnerListingsViewListUsecase,
  OwnerPaymentsCollectPaymentUsecase,
  OwnerPaymentsPayUsecase,
  OwnerPaymentsRecordPaymentUsecase,
  OwnerProductsApplyForProductUsecase,
  OwnerProductsViewListUsecase,
  OwnerOfferingsCreateManyUsecase,
  OwnerOfferingsPairWithUserUsecase,
  OwnerRealtorsConnectWithRealtorsUsecase,
  OwnerRealtorsRequestToRepresentUsecase,
  OwnerRealtorsViewListUsecase,
  OwnerRegisterUsecase,
  OwnerServiceProvidersApplyForServiceUsecase,
  OwnerServiceProvidersViewListUsecase,
  OwnerServicesRequestServiceUsecase,
  OwnerTenanciesCreateAgreementUsecase,
  OwnerTenanciesDeleteAgreementUsecase,
  OwnerTenanciesListAgreementsUsecase,
  OwnerTenanciesUpdateAgreementsUsecase,
  OwnerTenantsCreateTenantUsecase,
  OwnerTenantsDeleteTenantUsecase,
  OwnerTenantsListTenantsUsecase,
  OwnerTenantsSendRentReminderUsecase,
  OwnerTenantsUpdateTenantUsecase,
} from './index';
import { REAL_ESTATE_TYPES } from '../../types';
import { OwnerSendTenancyAgreementUsecase } from './tenancies-send-agreement';
import { OwnerUpdateComplaintUsecase } from './complaints-update';
import { OwnerPaymentsViewListUsecase } from './payments-view-list';
import { OwnerGetProvidersByOfferingCategoryUsecase } from './providers-by-offering-category';
import { OwnerApplyForOfferingUsecase } from './apply-for-offering';

export const ownerUsecaseProviders = [
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerApplicationsListUsecase,
    useClass: OwnerApplicationsListUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerApplicationsReactUsecase,
    useClass: OwnerApplicationsReactUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerAssignOfferingUsecase,
    useClass: OwnerAssignOfferingUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerAuthLoginUsecase,
    useClass: OwnerAuthLoginUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerComplaintsListUsecase,
    useClass: OwnerComplaintsListUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerComplaintsResolveUsecase,
    useClass: OwnerComplaintsResolveUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerListingsViewActivityUsecase,
    useClass: OwnerListingsViewActivityUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerListingsViewListUsecase,
    useClass: OwnerListingsViewListUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerPaymentsCollectPaymentUsecase,
    useClass: OwnerPaymentsCollectPaymentUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerPaymentsPayUsecase,
    useClass: OwnerPaymentsPayUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerPaymentsRecordPaymentUsecase,
    useClass: OwnerPaymentsRecordPaymentUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerProductsApplyForProductUsecase,
    useClass: OwnerProductsApplyForProductUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerProductsViewListUsecase,
    useClass: OwnerProductsViewListUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerOfferingsCreateManyUsecase,
    useClass: OwnerOfferingsCreateManyUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerOfferingsPairWithUserUsecase,
    useClass: OwnerOfferingsPairWithUserUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerRealtorsConnectWithRealtorsUsecase,
    useClass: OwnerRealtorsConnectWithRealtorsUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerRealtorsRequestToRepresentUsecase,
    useClass: OwnerRealtorsRequestToRepresentUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerRealtorsViewListUsecase,
    useClass: OwnerRealtorsViewListUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerRegisterUsecase,
    useClass: OwnerRegisterUsecase,
  },
  {
    provide:
      REAL_ESTATE_TYPES.useCases.OwnerServiceProvidersApplyForServiceUsecase,
    useClass: OwnerServiceProvidersApplyForServiceUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerServiceProvidersViewListUsecase,
    useClass: OwnerServiceProvidersViewListUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerServicesRequestServiceUsecase,
    useClass: OwnerServicesRequestServiceUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenanciesCreateAgreementUsecase,
    useClass: OwnerTenanciesCreateAgreementUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenanciesDeleteAgreementUsecase,
    useClass: OwnerTenanciesDeleteAgreementUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenanciesListAgreementsUsecase,
    useClass: OwnerTenanciesListAgreementsUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenanciesUpdateAgreementsUsecase,
    useClass: OwnerTenanciesUpdateAgreementsUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenantsCreateTenantUsecase,
    useClass: OwnerTenantsCreateTenantUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenantsDeleteTenantUsecase,
    useClass: OwnerTenantsDeleteTenantUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenantsListTenantsUsecase,
    useClass: OwnerTenantsListTenantsUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenantsSendRentReminderUsecase,
    useClass: OwnerTenantsSendRentReminderUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerTenantsUpdateTenantUsecase,
    useClass: OwnerTenantsUpdateTenantUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerSendTenancyAgreementUsecase,
    useClass: OwnerSendTenancyAgreementUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerUpdateComplaintUsecase,
    useClass: OwnerUpdateComplaintUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerPaymentsViewListUsecase,
    useClass: OwnerPaymentsViewListUsecase,
  },
  {
    provide:
      REAL_ESTATE_TYPES.useCases.OwnerGetProvidersByOfferingCategoryUsecase,
    useClass: OwnerGetProvidersByOfferingCategoryUsecase,
  },
  {
    provide: REAL_ESTATE_TYPES.useCases.OwnerApplyForOfferingUsecase,
    useClass: OwnerApplyForOfferingUsecase,
  },
];
