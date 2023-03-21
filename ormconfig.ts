import { Action, ResourceAction } from '@core/domain/entities/actions';
import { Address, EntityAddress } from '@core/domain/entities/address';
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
import {
  Property,
  PropertyCategory,
  PropertyMeta,
  PropertyMetaCategory,
} from '@core/domain/entities/property';
import { Reaction } from '@core/domain/entities/reaction';
import { RequestMeta, RequestUser } from '@core/domain/entities/requests';
import { Resource } from '@core/domain/entities/resource';
import { Schedule } from '@core/domain/entities/schedules';
import { Search, SearchMeta } from '@core/domain/entities/search';
import { Token } from '@core/domain/entities/tokens';
import { User, UserMeta } from '@core/domain/entities/user';
import { UserProperty } from '@core/domain/entities/userProperties';
import { TestEntity } from 'src/test_entity/domain/testEntity.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const OrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dupa_test_db',
  entities: [
    TestEntity,
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
    PropertyMetaCategory,
    PropertyMeta,

    // Reaction
    Reaction,

    // Request
    Request,
    RequestMeta,
    RequestUser,

    // Resource
    Resource,

    // Schedule
    Schedule,

    // Search
    Search,
    SearchMeta,

    // Token
    Token,

    // User
    User,
    UserMeta,

    // User Property,
    UserProperty,
  ],
  synchronize: true,
};
