import { Global, Module } from '@nestjs/common';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
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
import { UserPropertyRepositoryImpl } from './infrastructure/repositories/user-properties-repository';
import { DB_TYPES } from './types';
import { BaseRepository } from 'base/base.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodRepositoryImpl } from './infrastructure/repositories/payment-methods-repository';
import { PaymentCategoryRepositoryImpl } from './infrastructure/repositories/payment-categories-repository';
import { PaymentRepositoryImpl } from './infrastructure/repositories/payments-repository';
import { TenancyAgreementRepositoryImpl } from './infrastructure/repositories/tenancy-agreements-repository';
import { UserTenancyAgreementRepositoryImpl } from './infrastructure/repositories/user-tenancy-agreements-repository';
import { models } from './models';
import { ApplicationRepositoryImpl } from './infrastructure/repositories/applications-repository';
import { ComplaintRepositoryImpl } from './infrastructure/repositories/complaints-repository';
import { BusinessRepositoryImpl } from './infrastructure/repositories/business-repository';
import { UserBusinessRepositoryImpl } from './infrastructure/repositories/user-business-repository';

const repository = {
  provide: DB_TYPES.repositories.Repository,
  useClass: Repository,
};

const userRepositoryImpl = {
  provide: DB_TYPES.repositories.UsersRepositoryImpl,
  useClass: UserRepositoryImpl,
};

const propertyRepositoryImpl = {
  provide: DB_TYPES.repositories.PropertyRepositoryImpl,
  useClass: PropertyRepositoryImpl,
};

const userPropertyRepositoryImpl = {
  provide: DB_TYPES.repositories.UserPropertyRepositoryImpl,
  useClass: UserPropertyRepositoryImpl,
};

const reactionRepositoryImpl = {
  provide: DB_TYPES.repositories.ReactionRepositoryImpl,
  useClass: ReactionRepositoryImpl,
};

const scheduleRepositoryImpl = {
  provide: DB_TYPES.repositories.ScheduleRepositoryImpl,
  useClass: ScheduleRepositoryImpl,
};

const userTenancyAgreementRepositoryImpl = {
  provide: DB_TYPES.repositories.UserTenancyAgreementRepositoryImpl,
  useClass: UserTenancyAgreementRepositoryImpl,
};

const tenancyAgreementRepositoryImpl = {
  provide: DB_TYPES.repositories.TenancyAgreementRepositoryImpl,
  useClass: TenancyAgreementRepositoryImpl,
};

const paymentRepositoryImpl = {
  provide: DB_TYPES.repositories.PaymentRepositoryImpl,
  useClass: PaymentRepositoryImpl,
};

const paymentMethodRepositoryImpl = {
  provide: DB_TYPES.repositories.PaymentMethodRepositoryImpl,
  useClass: PaymentMethodRepositoryImpl,
};

const paymentCategoryRepositoryImpl = {
  provide: DB_TYPES.repositories.PaymentCategoryRepositoryImpl,
  useClass: PaymentCategoryRepositoryImpl,
};

const applicationRepositoryImpl = {
  provide: DB_TYPES.repositories.ApplicationRepositoryImpl,
  useClass: ApplicationRepositoryImpl,
};

const complaintRepositoryImpl = {
  provide: DB_TYPES.repositories.ComplaintRepositoryImpl,
  useClass: ComplaintRepositoryImpl,
};

const businessRepositoryImpl = {
  provide: DB_TYPES.repositories.BusinessRepositoryImpl,
  useClass: BusinessRepositoryImpl,
};

const userBusinessRepositoryImpl = {
  provide: DB_TYPES.repositories.UserBusinessRepositoryImpl,
  useClass: UserBusinessRepositoryImpl,
};

const requestRepositoryImpl = {
  provide: DB_TYPES.repositories.RequestRepositoryImpl,
  useClass: RequestRepositoryImpl,
};

const repositories = [
  Repository,
  BaseRepository,
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
  businessRepositoryImpl,
  userBusinessRepositoryImpl,
  requestRepositoryImpl,
];

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(models)],
  providers: [...repositories],
  exports: [...repositories],
})
export class DbModule {}
