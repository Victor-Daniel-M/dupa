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
import { Action } from './domain/entities/actions';
import { Property } from './domain/entities/property';
import {
  AuthStrategy,
  AuthStrategyMeta,
} from './domain/entities/authStrategies';
import { Charge, ChargeType } from './domain/entities/charges';
import { Config } from './domain/entities/configs';
import { Invite, InviteMeta } from './domain/entities/invite';
import { Location } from './domain/entities/location';
import { Media } from './domain/entities/media';
import { Message } from './domain/entities/message';
import {
  NotificationFrequency,
  NotificationStrategy,
  NotificationSubscribable,
  NotificationSubscriber,
} from './domain/entities/notification';
import { Offer, OfferMeta } from './domain/entities/offers';
import { Permission } from './domain/entities/permissions';
import { Place, PlaceMeta } from './domain/entities/places';
import { PropertyCategory } from './domain/entities/property';
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
