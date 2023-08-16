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
import { OwnerRegisterUsecase } from './application/owner/register';
import { S3Provider } from './infrastructure/services/s3Provider.service';
import { BaseRepository } from 'base/base.repository';
import { RealtorController } from './adapter/controllers/realtor.controller';
import { RealtorRegisterUsecase } from './application/realtor/register';
import { AssignPropertyByOwnerUsecase } from './application/owner/assign-property';
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
import { PropertiesCreateManyUsecase } from './application/owner/properties-create-many';
import { AdminController } from './adapter/controllers/admin.controller';
import { ApplicationTypeController } from './adapter/controllers/crud-controllers/application-types.module';
import { EntityController } from './adapter/controllers/crud-controllers/entities.module';
import { PropertyCategoryController } from './adapter/controllers/crud-controllers/property-categories.module';
import { UserPropertyTypesController } from './adapter/controllers/crud-controllers/user-property-types.module';
import { RealtorRequestToRepresentUsecase } from './application/realtor/realtor-request-to-represent';

const registerOwnerUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.OwnerRegisterUsecase,
  useClass: OwnerRegisterUsecase,
};

const propertiesCreateManyUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.PropertiesCreateManyUsecase,
  useClass: PropertiesCreateManyUsecase,
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

const assignPropertyByOwnerUsecase = {
  provide: REAL_ESTATE_TYPES.useCases.AssignPropertyByOwnerUsecase,
  useClass: AssignPropertyByOwnerUsecase,
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
    assignPropertyByOwnerUsecase,
    searcherRegisterUsecase,
    searcherLoginUsecase,
    propertiesCreateManyUsecase,
    realtorRequestToRepresentUsecase,

    // Services
    emailService,
    s3Provider,
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
  ],
})
export class RealEstateModule {}
