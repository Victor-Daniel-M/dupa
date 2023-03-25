import { Global, Module, ValidationPipe } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { ActionsController } from './adapter/controllers/crud-controllers/actions';
import { ActionRepositoryImpl } from './infrastructure/repositories/actions-repository';
import { Repository } from 'typeorm';
import { AddressRepositoryImpl } from './infrastructure/repositories/addresses-repository';
import { AuthStrategyRepositoryImpl } from './infrastructure/repositories/auth-strategies-repository';
import { ChargeRepositoryImpl } from './infrastructure/repositories/charges-repository';
import { ConfigRepositoryImpl } from './infrastructure/repositories/configs-repository';
import { InviteRepositoryImpl } from './infrastructure/repositories/invites-repository';
import { LocationRepositoryImpl } from './infrastructure/repositories/locations-repository';
import { MediaRepositoryImpl } from './infrastructure/repositories/media-repository';
import { MessageRepositoryImpl } from './infrastructure/repositories/messages-repository';
import { NotificationStrategyRepositoryImpl } from './infrastructure/repositories/notification-strategies-repository';
import { NotificationFrequencyRepositoryImpl } from './infrastructure/repositories/notification-frequencies-repository';
import { NotificationSubscriberRepositoryImpl } from './infrastructure/repositories/notification-subscribers-repository';
import { NotificationSubscribableRepositoryImpl } from './infrastructure/repositories/notification-subscribables-repository';
import { OfferRepositoryImpl } from './infrastructure/repositories/offers-repository';
import { PermissionRepositoryImpl } from './infrastructure/repositories/permissions-repository';
import { PlaceRepositoryImpl } from './infrastructure/repositories/places-repository';
import { PropertyRepositoryImpl } from './infrastructure/repositories/properties-repository';
import { ReactionRepositoryImpl } from './infrastructure/repositories/reactions-repository';
import { RequestRepositoryImpl } from './infrastructure/repositories/requests-repository';
import { ResourceRepositoryImpl } from './infrastructure/repositories/resources-repository';
import { ScheduleRepositoryImpl } from './infrastructure/repositories/schedules-repository';
import { SearchRepositoryImpl } from './infrastructure/repositories/searches-repository';
import { TokenRepositoryImpl } from './infrastructure/repositories/tokens-repository';
import { UserRepositoryImpl } from './infrastructure/repositories/users-repository';
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
import { UserPropertyRepositoryImpl } from './infrastructure/repositories/user-properties-repository';
import { UserController } from './adapter/controllers/crud-controllers/users';
import { OwnerController } from './adapter/controllers/owner.controller';
import { TYPES } from './domain/types';
import { OwnerRegisterUsecase } from './application/owner/register';
import { S3Provider } from './infrastructure/services/s3Provider.service';
import { BaseRepository } from 'base/base.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealtorController } from './adapter/controllers/realtor.controller';
import { RealtorRegisterUsecase } from './application/realtor/register';
import { AssignPropertyByOwnerUsecase } from './application/owner/assign-property';
import { SearcherRegisterUsecase } from './application/searcher/register';
import { SearcherController } from './adapter/controllers/searcher.controller';
import { PaymentMethodRepositoryImpl } from './infrastructure/repositories/payment-methods-repository';
import { PaymentCategoryRepositoryImpl } from './infrastructure/repositories/payment-categories-repository';
import { PaymentRepositoryImpl } from './infrastructure/repositories/payments-repository';
import { TenancyAgreementRepositoryImpl } from './infrastructure/repositories/tenancy-agreements-repository';
import { UserTenancyAgreementRepositoryImpl } from './infrastructure/repositories/user-tenancy-agreements-repository';
import { UserTenancyAgreementController } from './adapter/controllers/crud-controllers/userTenancyAgreement';
import { TenancyAgreementController } from './adapter/controllers/crud-controllers/tenancyAgreement';
import { PaymentController } from './adapter/controllers/crud-controllers/payment';
import { PaymentMethodsController } from './adapter/controllers/crud-controllers/paymentMethods';
import { PaymentCategoriesController } from './adapter/controllers/crud-controllers/paymentCategories';
import { models } from './models';
import { ApplicationRepositoryImpl } from './infrastructure/repositories/applications-repository';
import { ApplicationController } from './adapter/controllers/crud-controllers/applications';
import { ComplaintController } from './adapter/controllers/crud-controllers/complaints';
import { ComplaintRepositoryImpl } from './infrastructure/repositories/complaints-repository';
import { SearcherLoginUsecase } from './application/searcher/login';

const registerOwnerUsecase = {
  provide: TYPES.useCases.OwnerRegisterUsecase,
  useClass: OwnerRegisterUsecase,
};

const emailService = {
  provide: TYPES.services.EmailService,
  useClass: EmailService,
};

const s3Provider = {
  provide: TYPES.services.S3Provider,
  useClass: S3Provider,
};

const repository = {
  provide: TYPES.repositories.Repository,
  useClass: Repository,
};

const userRepositoryImpl = {
  provide: TYPES.repositories.UsersRepositoryImpl,
  useClass: UserRepositoryImpl,
};

const propertyRepositoryImpl = {
  provide: TYPES.repositories.PropertyRepositoryImpl,
  useClass: PropertyRepositoryImpl,
};

const userPropertyRepositoryImpl = {
  provide: TYPES.repositories.UserPropertyRepositoryImpl,
  useClass: UserPropertyRepositoryImpl,
};

const reactionRepositoryImpl = {
  provide: TYPES.repositories.ReactionRepositoryImpl,
  useClass: ReactionRepositoryImpl,
};

const scheduleRepositoryImpl = {
  provide: TYPES.repositories.ScheduleRepositoryImpl,
  useClass: ScheduleRepositoryImpl,
};

const userTenancyAgreementRepositoryImpl = {
  provide: TYPES.repositories.UserTenancyAgreementRepositoryImpl,
  useClass: UserTenancyAgreementRepositoryImpl,
};

const tenancyAgreementRepositoryImpl = {
  provide: TYPES.repositories.TenancyAgreementRepositoryImpl,
  useClass: TenancyAgreementRepositoryImpl,
};

const paymentRepositoryImpl = {
  provide: TYPES.repositories.PaymentRepositoryImpl,
  useClass: PaymentRepositoryImpl,
};

const paymentMethodRepositoryImpl = {
  provide: TYPES.repositories.PaymentMethodRepositoryImpl,
  useClass: PaymentMethodRepositoryImpl,
};

const paymentCategoryRepositoryImpl = {
  provide: TYPES.repositories.PaymentCategoryRepositoryImpl,
  useClass: PaymentCategoryRepositoryImpl,
};

const applicationRepositoryImpl = {
  provide: TYPES.repositories.ApplicationRepositoryImpl,
  useClass: ApplicationRepositoryImpl,
};

const complaintRepositoryImpl = {
  provide: TYPES.repositories.ComplaintRepositoryImpl,
  useClass: ComplaintRepositoryImpl,
};

const realtorRegisterUsecase = {
  provide: TYPES.useCases.RealtorRegisterUsecase,
  useClass: RealtorRegisterUsecase,
};

const assignPropertyByOwnerUsecase = {
  provide: TYPES.useCases.AssignPropertyByOwnerUsecase,
  useClass: AssignPropertyByOwnerUsecase,
};

const searcherRegisterUsecase = {
  provide: TYPES.useCases.SearcherRegisterUsecase,
  useClass: SearcherRegisterUsecase,
};

const searcherLoginUsecase = {
  provide: TYPES.useCases.SearcherLoginUsecase,
  useClass: SearcherLoginUsecase,
};

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(models)],
  providers: [
    Repository,
    EmailService,
    BaseRepository,
    NotificationService,
    ResponseInterceptor,
    ActionRepositoryImpl,
    AddressRepositoryImpl,
    AuthStrategyRepositoryImpl,
    ChargeRepositoryImpl,
    ConfigRepositoryImpl,
    InviteRepositoryImpl,
    LocationRepositoryImpl,
    MediaRepositoryImpl,
    MessageRepositoryImpl,
    NotificationStrategyRepositoryImpl,
    NotificationFrequencyRepositoryImpl,
    NotificationSubscriberRepositoryImpl,
    NotificationSubscribableRepositoryImpl,
    OfferRepositoryImpl,
    PermissionRepositoryImpl,
    PlaceRepositoryImpl,
    PropertyRepositoryImpl,
    ReactionRepositoryImpl,
    RequestRepositoryImpl,
    ResourceRepositoryImpl,
    ScheduleRepositoryImpl,
    SearchRepositoryImpl,
    TokenRepositoryImpl,
    UserRepositoryImpl,
    UserPropertyRepositoryImpl,
    ComplaintRepositoryImpl,
    ApplicationRepositoryImpl,
    UserTenancyAgreementRepositoryImpl,
    TenancyAgreementRepositoryImpl,
    PaymentRepositoryImpl,
    PaymentMethodRepositoryImpl,
    PaymentCategoryRepositoryImpl,

    // Pipes
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe(),
    // },

    // Usecases
    registerOwnerUsecase,
    realtorRegisterUsecase,
    assignPropertyByOwnerUsecase,
    searcherRegisterUsecase,
    searcherLoginUsecase,

    // Services
    emailService,
    s3Provider,

    // Repositories
    repository,
    applicationRepositoryImpl,
    userRepositoryImpl,
    propertyRepositoryImpl,
    reactionRepositoryImpl,
    scheduleRepositoryImpl,
    userPropertyRepositoryImpl,
    userTenancyAgreementRepositoryImpl,
    tenancyAgreementRepositoryImpl,
    paymentRepositoryImpl,
    paymentMethodRepositoryImpl,
    paymentCategoryRepositoryImpl,
    complaintRepositoryImpl,
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

    // Custom controllers
    OwnerController,
    RealtorController,
    SearcherController,
  ],
})
export class CoreModule {}
