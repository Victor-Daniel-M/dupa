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
import { OfferingController } from './adapter/controllers/crud-controllers/offerings';
import { ReactionController } from './adapter/controllers/crud-controllers/reactions';
import { RequestController } from './adapter/controllers/crud-controllers/requests';
import { ResourceController } from './adapter/controllers/crud-controllers/resources';
import { ScheduleController } from './adapter/controllers/crud-controllers/schedules';
import { SearchController } from './adapter/controllers/crud-controllers/searches';
import { TokenController } from './adapter/controllers/crud-controllers/tokens';
import { UserOfferingController } from './adapter/controllers/crud-controllers/user-offerings';
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
import { OfferingCategoryController } from './adapter/controllers/crud-controllers/offering-categories.module';
import { UserOfferingTypesController } from './adapter/controllers/crud-controllers/user-offering-types.module';
import { RealtorRequestToRepresentUsecase } from './application/realtor/realtor-request-to-represent';
import { ownerUsecaseProviders } from './application/owner/owner-usecases';

import { realtorUsecaseProviders } from './application/realtor/realtor-usecases';
import { searcherUsecaseProviders } from './application/searcher/searcher-usecases';
import { tenantUsecaseProviders } from './application/tenant/tenant-usecases';
import { productProviderUsecaseProviders } from './application/product-provider/product-provider-usecases';
import { serviceProviderUsecaseProviders } from './application/service-provider/service-provider-usecases';
import { systemUsecaseProviders } from './application/system/system-usecases';
import { statisticsUsecaseProviders } from './application/statistics/statistics-usecases';
import { ServiceProviderController } from './adapter/controllers/service-provider.controller';
import { ProductProviderController } from './adapter/controllers/product-provider.controller';
import { generalUsecases } from './application/general/general-usecases';
import { TenantController } from './adapter/controllers/tenant.controller';

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
    realtorRegisterUsecase,
    searcherRegisterUsecase,
    searcherLoginUsecase,
    realtorRequestToRepresentUsecase,

    // Services
    emailService,
    s3Provider,

    // Owner usecases
    ...ownerUsecaseProviders,
    ...realtorUsecaseProviders,
    ...searcherUsecaseProviders,
    ...tenantUsecaseProviders,
    ...productProviderUsecaseProviders,
    ...serviceProviderUsecaseProviders,
    ...systemUsecaseProviders,
    ...statisticsUsecaseProviders,
    ...generalUsecases,
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
    OfferingController,
    ReactionController,
    RequestController,
    ResourceController,
    ScheduleController,
    SearchController,
    TenancyAgreementController,
    TokenController,
    UserOfferingController,
    UserController,
    UserTenancyAgreementController,
    ApplicationTypeController,
    EntityController,
    OfferingCategoryController,
    UserOfferingTypesController,

    // Custom controllers
    OwnerController,
    RealtorController,
    SearcherController,
    AdminController,
    ServiceProviderController,
    ProductProviderController,
    TenantController,

    // ADVANCED USECASES
  ],
})
export class RealEstateModule {}
