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
import { User } from './domain/entities/user';
import { ResourceAction } from './domain/entities/actions';
import { Address, EntityAddress } from './domain/entities/address';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Property } from './domain/entities/property';
import {
  AuthStrategy,
  AuthStrategyMeta,
} from '@core/domain/entities/authStrategies';
import { Charge, ChargeType } from '@core/domain/entities/charges';
import { Config } from '@core/domain/entities/configs';
import { Invite, InviteMeta } from '@core/domain/entities/invite';
import { Location } from '@core/domain/entities/location';
import { Media } from '@core/domain/entities/media';
import { Message } from '@core/domain/entities/message';
import {
  NotificationFrequency,
  NotificationStrategy,
  NotificationSubscribable,
  NotificationSubscriber,
} from '@core/domain/entities/notification';
import { Offer, OfferMeta } from '@core/domain/entities/offers';
import { Permission } from '@core/domain/entities/permissions';
import { Place, PlaceMeta } from '@core/domain/entities/places';
import { PropertyCategory } from '@core/domain/entities/property';
import { RealtorController } from './adapter/controllers/realtor.controller';
import { RealtorRegisterUsecase } from './application/realtor/register';
import { UserProperty } from './domain/entities/userProperties';
import { AssignPropertyByOwnerUsecase } from './application/owner/assign-property';

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

const realtorRegisterUsecase = {
  provide: TYPES.useCases.RealtorRegisterUsecase,
  useClass: RealtorRegisterUsecase,
};

const assignPropertyByOwnerUsecase = {
  provide: TYPES.useCases.AssignPropertyByOwnerUsecase,
  useClass: AssignPropertyByOwnerUsecase,
};

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Action,
      ResourceAction,
      Address,
      EntityAddress,
      // auth strategies
      AuthStrategy,
      AuthStrategyMeta,

      // Charges
      ChargeType,
      Charge,

      // Configs
      Config,

      // Invite
      Invite,
      InviteMeta,

      // Location
      Location,

      // Media
      Media,

      // Messages
      Message,

      // Notifications
      NotificationStrategy,
      NotificationFrequency,
      NotificationSubscribable,
      NotificationSubscriber,

      // Offer
      Offer,
      OfferMeta,

      // Permission
      Permission,

      //Place
      Place,
      PlaceMeta,

      // Property
      PropertyCategory,
      Property,
      UserProperty,
    ]),
  ],
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

    // Pipes
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe(),
    // },

    // Usecases
    registerOwnerUsecase,
    realtorRegisterUsecase,
    assignPropertyByOwnerUsecase,

    // Services
    emailService,
    s3Provider,

    // Repositories
    repository,
    userRepositoryImpl,
    propertyRepositoryImpl,
    userPropertyRepositoryImpl,
  ],
  controllers: [
    ActionsController,
    ActionsController,
    AddressesController,
    AuthStrategyesController,
    ChargeesController,
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
    PermissionController,
    PlaceController,
    PropertyController,
    ReactionController,
    RequestController,
    ResourceController,
    ScheduleController,
    SearchController,
    TokenController,
    UserPropertyController,
    UserController,

    // Custom controllers
    OwnerController,
    RealtorController,
  ],
})
export class CoreModule {}
