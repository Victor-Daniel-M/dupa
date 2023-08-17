import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { ActionsController } from './adapter/controllers/crud-controllers/actions';
import { Repository } from 'typeorm';
import { AddressesController } from './adapter/controllers/crud-controllers/addresses';
import { AuthStrategyesController } from './adapter/controllers/crud-controllers/authStrategies';
import { ChargeesController } from './adapter/controllers/crud-controllers/charges';
import { ConfigsController } from './adapter/controllers/crud-controllers/configs';
import { InvitesController } from './adapter/controllers/crud-controllers/invites';
import { LocationsController } from './adapter/controllers/crud-controllers/locations';
import { MediaController } from './adapter/controllers/crud-controllers/media';
import { MessageController } from './adapter/controllers/crud-controllers/messages';
import {
  NotificationFrequenciesController,
  NotificationStrategiesController,
  NotificationSubscribablesController,
  NotificationSubscribersController,
} from './adapter/controllers/crud-controllers/notifications';
import { OfferController } from './adapter/controllers/crud-controllers/offers';
import { PermissionController } from './adapter/controllers/crud-controllers/permissions';
import { PlaceController } from './adapter/controllers/crud-controllers/places';
import { PropertyController } from './adapter/controllers/crud-controllers/properties';
import { ReactionController } from './adapter/controllers/crud-controllers/reactions';
import { RequestController } from './adapter/controllers/crud-controllers/requests';
import { ResourceController } from './adapter/controllers/crud-controllers/resources';
import { ScheduleController } from './adapter/controllers/crud-controllers/schedules';
import { SearchController } from './adapter/controllers/crud-controllers/searches';
import { TokenController } from './adapter/controllers/crud-controllers/tokens';
import { UserPropertyController } from './adapter/controllers/crud-controllers/user-properties';
import { UserController } from './adapter/controllers/crud-controllers/users';
import { OwnerController } from './adapter/controllers/owner.controller';
import { S3Provider } from './infrastructure/services/s3Provider.service';
import { BaseRepository } from 'base/base.repository';
import { RealtorController } from './adapter/controllers/realtor.controller';
import { RealtorRegisterUsecase } from './application/realtor/register';
import { SearcherRegisterUsecase } from './application/searcher/register';
import { SearcherController } from './adapter/controllers/searcher.controller';
import { UserTenancyAgreementController } from './adapter/controllers/crud-controllers/userTenancyAgreement';
import { TenancyAgreementController } from './adapter/controllers/crud-controllers/tenancyAgreement';
import { PaymentController } from './adapter/controllers/crud-controllers/payment';
import { PaymentMethodsController } from './adapter/controllers/crud-controllers/paymentMethods';
import { PaymentCategoriesController } from './adapter/controllers/crud-controllers/paymentCategories';
import { ApplicationController } from './adapter/controllers/crud-controllers/applications';
import { ComplaintController } from './adapter/controllers/crud-controllers/complaints';
import { SearcherLoginUsecase } from './application/searcher/login';
import { REAL_ESTATE_TYPES } from './types';
import { DbModule } from '@db/db.module';
import { AdminController } from './adapter/controllers/admin.controller';
import { ApplicationTypeController } from './adapter/controllers/crud-controllers/application-types.module';
import { EntityController } from './adapter/controllers/crud-controllers/entities.module';
import { PropertyCategoryController } from './adapter/controllers/crud-controllers/property-categories.module';
import { UserPropertyTypesController } from './adapter/controllers/crud-controllers/user-property-types.module';
import { RealtorRequestToRepresentUsecase } from './application/realtor/realtor-request-to-represent';
import { ownerUsecaseProviders } from './application/owner/owner-usecases';

import {
  OwnerApplicationsListUsecase,
  OwnerApplicationsReactUsecase,
  OwnerAssignPropertyUsecase,
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
  OwnerPropertiesCreateManyUsecase,
  OwnerPropertiesPairWithUserUsecase,
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
} from './application/owner';
import { realtorUsecaseProviders } from './application/realtor/realtor-usecases';
import { searcherUsecaseProviders } from './application/searcher/searcher-usecases';
import { tenantUsecaseProviders } from './application/tenant/tenant-usecases';
import { productProviderUsecaseProviders } from './application/product-provider/product-provider-usecases';
import { serviceProviderUsecaseProviders } from './application/service-provider/service-provider-usecases';
import { systemUsecaseProviders } from './application/system/system-usecases';
import { statisticsUsecaseProviders } from './application/statistics/statistics-usecases';
import { ServiceProviderController } from './adapter/controllers/service-provider.controller';
import { ProductProviderController } from './adapter/controllers/product-provider.controller';

const registerOwnerUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.OwnerRegisterUsecase,
  useClass: OwnerRegisterUsecase,
};

const emailService = {
  provide: REAL_ESTATE_TYPES.services.EmailService,
  useClass: EmailService,
};

const s3Provider = {
  provide: REAL_ESTATE_TYPES.services.S3Provider,
  useClass: S3Provider,
};

const realtorRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRegisterUsecase,
  useClass: RealtorRegisterUsecase,
};

const searcherRegisterUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherRegisterUsecase,
  useClass: SearcherRegisterUsecase,
};

const searcherLoginUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.SearcherLoginUsecase,
  useClass: SearcherLoginUsecase,
};

const realtorRequestToRepresentUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.RealtorRequestToRepresentUsecase,
  useClass: RealtorRequestToRepresentUsecase,
};

@Global()
@Module({
  imports: [DbModule],
  providers: [
    Repository,
    EmailService,
    BaseRepository,
    NotificationService,
    ResponseInterceptor,

    // Usecases
    registerOwnerUsecase,
    realtorRegisterUsecase,
    searcherRegisterUsecase,
    searcherLoginUsecase,
    realtorRequestToRepresentUsecase,

    // Services
    emailService,
    s3Provider,

    // Owner usecases

    {
      provide: REAL_ESTATE_TYPES.useCases.OwnerApplicationsListUsecase,
      useClass: OwnerApplicationsListUsecase,
    },
    {
      provide: REAL_ESTATE_TYPES.useCases.OwnerApplicationsReactUsecase,
      useClass: OwnerApplicationsReactUsecase,
    },
    {
      provide: REAL_ESTATE_TYPES.useCases.OwnerAssignPropertyUsecase,
      useClass: OwnerAssignPropertyUsecase,
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
      provide: REAL_ESTATE_TYPES.useCases.OwnerPropertiesCreateManyUsecase,
      useClass: OwnerPropertiesCreateManyUsecase,
    },
    {
      provide: REAL_ESTATE_TYPES.useCases.OwnerPropertiesPairWithUserUsecase,
      useClass: OwnerPropertiesPairWithUserUsecase,
    },
    {
      provide:
        REAL_ESTATE_TYPES.useCases.OwnerRealtorsConnectWithRealtorsUsecase,
      useClass: OwnerRealtorsConnectWithRealtorsUsecase,
    },
    {
      provide:
        REAL_ESTATE_TYPES.useCases.OwnerRealtorsRequestToRepresentUsecase,
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

    ...realtorUsecaseProviders,
    ...searcherUsecaseProviders,
    ...tenantUsecaseProviders,
    ...productProviderUsecaseProviders,
    ...serviceProviderUsecaseProviders,
    ...systemUsecaseProviders,
    ...statisticsUsecaseProviders,
  ],
  controllers: [
    ActionsController,
    ApplicationController,
    AddressesController,
    AuthStrategyesController,
    ChargeesController,
    ComplaintController,
    ConfigsController,
    InvitesController,
    LocationsController,
    MediaController,
    MessageController,
    MessageController,
    NotificationStrategiesController,
    NotificationFrequenciesController,
    NotificationSubscribersController,
    NotificationSubscribablesController,
    OfferController,
    PaymentController,
    PaymentCategoriesController,
    PaymentMethodsController,
    PermissionController,
    PlaceController,
    PropertyController,
    ReactionController,
    RequestController,
    ResourceController,
    ScheduleController,
    SearchController,
    TenancyAgreementController,
    TokenController,
    UserPropertyController,
    UserController,
    UserTenancyAgreementController,
    ApplicationTypeController,
    EntityController,
    PropertyCategoryController,
    UserPropertyTypesController,

    // Custom controllers
    OwnerController,
    RealtorController,
    SearcherController,
    AdminController,
    ServiceProviderController,
    ProductProviderController,
  ],
})
export class RealEstateModule {}
