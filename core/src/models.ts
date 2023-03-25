import { UserTenancyAgreement } from './domain/entities/userTenancyAgreement';
import { TenancyAgreement } from './domain/entities/tenancyAgreement';
import { Payment } from './domain/entities/payment';
import { PaymentMethod } from './domain/entities/paymentMethod';
import { PaymentCategory } from './domain/entities/paymentCategory';
import { Reaction } from './domain/entities/reaction';
import { Schedule } from './domain/entities/schedules';
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
import { UserProperty } from './domain/entities/userProperties';
import { Application } from './domain/entities/application';
import { Complaint } from './domain/entities/complaint';

export const models = [
  Action,
  Address,
  Application,
  AuthStrategy,
  AuthStrategyMeta,
  Charge,
  ChargeType,
  Config,
  Complaint,
  EntityAddress,
  Invite,
  InviteMeta,
  Location,
  Media,
  Message,
  NotificationFrequency,
  NotificationStrategy,
  NotificationSubscribable,
  NotificationSubscriber,
  Offer,
  OfferMeta,
  Payment,
  PaymentCategory,
  PaymentMethod,
  Permission,
  Place,
  PlaceMeta,
  Property,
  PropertyCategory,
  Reaction,
  ResourceAction,
  Schedule,
  TenancyAgreement,
  User,
  UserProperty,
  UserTenancyAgreement,
];
