import { IsEmail, IsNotEmpty } from 'class-validator';

// Provider apply for product
export class ProviderApplyForProductReqBodyDto {}
export class ProviderApplyForProductReqQueryDto {}

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
  propertyCategoryId: number;
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