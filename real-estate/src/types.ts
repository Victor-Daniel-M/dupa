export const REAL_ESTATE_TYPES = {
  services: {
    EmailService: 'EmailService',
    S3Provider: 'S3Provider',
  },
  databases: {
    // _: {
    //   connectionName: '_',
    // },
  },
  useCases: {
    AssignPropertyByOwnerUsecase: 'AssignPropertyByOwnerUsecase',
    PropertiesCreateManyUsecase: 'PropertiesCreateManyUsecase',

    // Owner usecases
    OwnerApplicationsListUsecase: 'OwnerApplicationsListUsecase',
    OwnerApplicationsReactUsecase: 'OwnerApplicationsReactUsecase',
    OwnerAssignPropertyUsecase: 'OwnerAssignPropertyUsecase',
    OwnerAuthLoginUsecase: 'OwnerAuthLoginUsecase',
    OwnerComplaintsListUsecase: 'OwnerComplaintsListUsecase',
    OwnerComplaintsResolveUsecase: 'OwnerComplaintsResolveUsecase',
    OwnerListingsViewActivityUsecase: 'OwnerListingsViewActivityUsecase',
    OwnerListingsViewListUsecase: 'OwnerListingsViewListUsecase',
    OwnerPaymentsCollectPaymentUsecase: 'OwnerPaymentsCollectPaymentUsecase',
    OwnerPaymentsPayUsecase: 'OwnerPaymentsPayUsecase',
    OwnerPaymentsRecordPaymentUsecase: 'OwnerPaymentsRecordPaymentUsecase',
    OwnerProductsApplyForProductUsecase: 'OwnerProductsApplyForProductUsecase',
    OwnerProductsViewListUsecase: 'OwnerProductsViewListUsecase',
    OwnerPropertiesCreateManyUsecase: 'OwnerPropertiesCreateManyUsecase',
    OwnerPropertiesPairWithUserUsecase: 'OwnerPropertiesPairWithUserUsecase',
    OwnerRealtorsConnectWithRealtorsUsecase:
      'OwnerRealtorsConnectWithRealtorsUsecase',
    OwnerRealtorsRequestToRepresentUsecase:
      'OwnerRealtorsRequestToRepresentUsecase',
    OwnerRealtorsViewListUsecase: 'OwnerRealtorsViewListUsecase',
    OwnerRegisterUsecase: 'OwnerRegisterUsecase',
    OwnerServiceProvidersApplyForServiceUsecase:
      'OwnerServiceProvidersApplyForServiceUsecase',
    OwnerServiceProvidersViewListUsecase:
      'OwnerServiceProvidersViewListUsecase',
    OwnerServicesRequestServiceUsecase: 'OwnerServicesRequestServiceUsecase',
    OwnerTenanciesCreateAgreementUsecase:
      'OwnerTenanciesCreateAgreementUsecase',
    OwnerTenanciesDeleteAgreementUsecase:
      'OwnerTenanciesDeleteAgreementUsecase',
    OwnerTenanciesListAgreementsUsecase: 'OwnerTenanciesListAgreementsUsecase',
    OwnerTenanciesUpdateAgreementsUsecase:
      'OwnerTenanciesUpdateAgreementsUsecase',
    OwnerTenantsCreateTenantUsecase: 'OwnerTenantsCreateTenantUsecase',
    OwnerTenantsDeleteTenantUsecase: 'OwnerTenantsDeleteTenantUsecase',
    OwnerTenantsListTenantsUsecase: 'OwnerTenantsListTenantsUsecase',
    OwnerTenantsSendRentReminderUsecase: 'OwnerTenantsSendRentReminderUsecase',
    OwnerTenantsUpdateTenantUsecase: 'OwnerTenantsUpdateTenantUsecase',
    OwnerSendTenancyAgreementUsecase: 'OwnerSendTenancyAgreementUsecase',
    OwnerUpdateComplaintUsecase: 'OwnerUpdateComplaintUsecase',
    OwnerPaymentsViewListUsecase: 'OwnerPaymentsViewListUsecase',

    // Realtor
    RealtorLoginUsecase: 'RealtorLoginUsecase',
    RealtorCreateMessageUsecase: 'RealtorCreateMessageUsecase',
    RealtorViewOwnerRequestListUsecase: 'RealtorViewOwnerRequestListUsecase',
    RealtorConnectWithOwnersUsecase: 'RealtorConnectWithOwnersUsecase',
    RealtorViewOwnerListUsecase: 'RealtorViewOwnerListUsecase',
    RealtorHandoverPropertyUsecase: 'RealtorHandoverPropertyUsecase',
    RealtorViewPropertyListUsecase: 'RealtorViewPropertyListUsecase',
    RealtorRecordPropertyUsecase: 'RealtorRecordPropertyUsecase',
    RealtorRequestToRepresentUsecase: 'RealtorRequestToRepresentUsecase',
    RealtorRegisterUsecase: 'RealtorRegisterUsecase',
    RealtorRecordPropertySaleUsecase: 'RealtorRecordPropertySaleUsecase',
    RealtorViewSalesListPropertyUsecase: 'RealtorViewSalesListPropertyUsecase',
    RealtorReactToVisitRequestUsecase: 'RealtorReactToVisitRequestUsecase',
    RealtorViewVisitRequestsUsecase: 'RealtorViewVisitRequestsUsecase',
    RealtorCreateScheduleUsecase: 'RealtorCreateScheduleUsecase',

    // Searcher
    SearcherListingsBookUsecase: 'SearcherListingsBookUsecase',
    SearcherListingsSearchUsecase: 'SearcherListingsSearchUsecase',
    SearcherViewListingViewUsecase: 'SearcherViewListingViewUsecase',
    SearcherLoginUsecase: 'SearcherLoginUsecase',
    SearcherCreateMessageUsecase: 'SearcherCreateMessageUsecase',
    SearcherMakePaymentUsecase: 'SearcherMakePaymentUsecase',
    SearcherRealtorsConnectUsecase: 'SearcherRealtorsConnectUsecase',
    SearcherViewRealtorsListUsecase: 'SearcherViewRealtorsListUsecase',
    SearcherRequestVisitUsecase: 'SearcherRequestVisitUsecase',
    SearcherRegisterUsecase: 'SearcherRegisterUsecase',
    SearcherCancelVisitUsecase: 'SearcherCancelVisitUsecase',
    SearcherViewListingListUsecase: 'SearcherViewListingListUsecase',
    SearcherReactionsCreateUsecase: 'SearcherReactionsCreateUsecase',
    SearcherCreateScheduleApplicationUsecase:
      'SearcherCreateScheduleApplicationUsecase',
    SearcherViewTenancyAgreementUsecase: 'SearcherViewTenancyAgreementUsecase',
    SearcherAcceptTenancyAgreementUsecase:
      'SearcherAcceptTenancyAgreementUsecase',

    // Tenant
    TenantsLoginUsecase: 'TenantsLoginUsecase',
    TenantsRegisterUsecase: 'TenantsRegisterUsecase',
    TenantComplaintsCreateComplaintUsecase:
      'TenantComplaintsCreateComplaintUsecase',
    TenantComplaintsDeleteComplaintUsecase:
      'TenantComplaintsDeleteComplaintUsecase',
    TenantComplaintsUpdateComplaintUsecase:
      'TenantComplaintsUpdateComplaintUsecase',
    TenantPaymentsMakePaymentUsecase: 'TenantPaymentsMakePaymentUsecase',
    TenantProductsApplyForProductUsecase:
      'TenantProductsApplyForProductUsecase',
    TenantProductsListProductsUsecase: 'TenantProductsListProductsUsecase',
    TenantServiceProvidersListServiceProvidersUsecase:
      'TenantServiceProvidersListServiceProvidersUsecase',
    TenantServicesApplyForServiceUsecase:
      'TenantServicesApplyForServiceUsecase',
    TenantServicesListServicesUsecase: 'TenantServicesListServicesUsecase',
    TenantTenanciesEndTenancyUsecase: 'TenantTenanciesEndTenancyUsecase',
    TenantTenanciesListAgreementsUsecase:
      'TenantTenanciesListAgreementsUsecase',
    TenantTenanciesViewAgreementUsecase: 'TenantTenanciesViewAgreementUsecase',

    // Product provider
    ProductProviderApplicationsApplyUsecase:
      'ProductProviderApplicationsApplyUsecase',
    ProductProviderApplicationsListUsecase:
      'ProductProviderApplicationsListUsecase',
    ProductProviderLoginUsecase: 'ProductProviderLoginUsecase',
    ProductProviderRegisterUsecase: 'ProductProviderRegisterUsecase',

    // Service provider
    ServiceProviderApplicationsReactUsecase:
      'ServiceProviderApplicationsReactUsecase',
    ServiceProviderRegisterUsecase: 'ServiceProviderRegisterUsecase',
    ServiceProviderServiceCategoriesListUsecase:
      'ServiceProviderServiceCategoriesListUsecase',
    ServiceProviderServicesApplyUsecase: 'ServiceProviderServicesApplyUsecase',
    ServiceProviderServicesCreateUsecase:
      'ServiceProviderServicesCreateUsecase',
    ServiceProviderSubscriptionsInitiateTerminateUsecase:
      'ServiceProviderSubscriptionsInitiateTerminateUsecase',
    ServiceProviderSubscriptionsListUsecase:
      'ServiceProviderSubscriptionsListUsecase',

    // system
    SystemCommissionsSplitCommissionUsecase:
      'SystemCommissionsSplitCommissionUsecase',
    SystemNotificationsSendNotificationUsecase:
      'SystemNotificationsSendNotificationUsecase',
    SystemPaymentsProcessPaymentUsecase: 'SystemPaymentsProcessPaymentUsecase',

    // STATISTICS
    StatisticsCountsGraphsUsecase: 'StatisticsCountsGraphsUsecase',
    StatisticsCountsViewUsecase: 'StatisticsCountsViewUsecase',

    // ADVANCED USECASES
    AdvancedCreateUserPropertyUsecase: 'AdvancedCreateUserPropertyUsecase',
    AdvancedGetUserPropertiesUsecase: 'AdvancedGetUserPropertiesUsecase',
  },
};
