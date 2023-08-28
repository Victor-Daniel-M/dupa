import { ApplicationType } from '@db/domain/entities';
import { IsEmail, IsNotEmpty } from 'class-validator';

// Provider apply for product
export class ProviderApplyForOfferingCategoryReqBodyDto {
  userId: number;
  applicationType: ApplicationType;
  refEntityId: number;
  businessId: number;
  refEntityName: string;
}
export class ProviderApplyForOfferingCategoryReqQueryDto {}

// Provider apply for product
export class ProviderApplicationsListReqBodyDto {}
export class ProviderApplicationsListReqQueryDto {}

// login
export class ProviderLoginDto {}

// register
export class ProviderRegisterDto {}

// applications react
export class ServiceProviderApplicationsReactReqBodyDto {}
export class ServiceProviderApplicationsReactReqQueryDto {}

// register
class ServiceProviderRegistrationOfferingsDto {
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  openDate: string;
  offeringCategoryId: number;
}

export class ServiceProviderRegisterReqBodyDto {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  password: string;

  businessName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  offerings: ServiceProviderRegistrationOfferingsDto[];
}
export class ServiceProviderRegisterReqQueryDto {}

// service categories list
export class ServiceProviderServiceCategoriesListReqBodyDto {}
export class ServiceProviderServiceCategoriesListReqQueryDto {}

// services apply
export class ServiceProviderServicesApplyReqBodyDto {}
export class ServiceProviderServicesApplyReqQueryDto {}

// services create
export class ServiceProviderServicesCreateReqBodyDto {}
export class ServiceProviderServicesCreateReqQueryDto {}

// subscriptions initiate terminate
export class ServiceProviderSubscriptionsInitiateTerminateReqBodyDto {}
export class ServiceProviderSubscriptionsInitiateTerminateReqQueryDto {}

// subscriptions list
export class ServiceProviderSubscriptionsListReqBodyDto {}
export class ServiceProviderSubscriptionsListReqQueryDto {}

// service provider login
export class ServiceProviderLoginReqBodyDto {
  email: string;
  password: string;
}
export class ServiceProviderLoginReqQueryDto {}

// applications list
export class ServiceProviderViewApplicationsListReqBodyDto {}
export class ServiceProviderViewApplicationsListReqQueryDto {}
