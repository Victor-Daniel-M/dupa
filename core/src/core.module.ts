import { Global, Module } from '@nestjs/common';
import { EmailService } from './infrastructure/services/emailService';
import { NotificationService } from './infrastructure/services/notificationService';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import { ActionsController } from './adapter/crud-controllers/actions';
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
import { AddressesController } from './adapter/crud-controllers/addresses';
import { AuthStrategyesController } from './adapter/crud-controllers/authStrategies';
import { ChargeesController } from './adapter/crud-controllers/charges';
import { ConfigsController } from './adapter/crud-controllers/configs';
import { InvitesController } from './adapter/crud-controllers/invites';
import { LocationsController } from './adapter/crud-controllers/locations';
import { MediaController } from './adapter/crud-controllers/media';
import { MessageController } from './adapter/crud-controllers/messages';
import {
  NotificationFrequenciesController,
  NotificationStrategiesController,
  NotificationSubscribablesController,
  NotificationSubscribersController,
} from './adapter/crud-controllers/notifications';
import { OfferController } from './adapter/crud-controllers/offers';
import { PermissionController } from './adapter/crud-controllers/permissions';
import { PlaceController } from './adapter/crud-controllers/places';
import { PropertyController } from './adapter/crud-controllers/properties';
import { ReactionController } from './adapter/crud-controllers/reactions';
import { RequestController } from './adapter/crud-controllers/requests';
import { ResourceController } from './adapter/crud-controllers/resources';
import { ScheduleController } from './adapter/crud-controllers/schedules';
import { SearchController } from './adapter/crud-controllers/searches';
import { TokenController } from './adapter/crud-controllers/tokens';
import { UserPropertyController } from './adapter/crud-controllers/user-properties';
import { UserPropertyRepositoryImpl } from './infrastructure/repositories/user-properties-repository';
import { UserController } from './adapter/crud-controllers/users';

@Global()
@Module({
  providers: [
    Repository,
    EmailService,
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
  ],
})
export class CoreModule {}
