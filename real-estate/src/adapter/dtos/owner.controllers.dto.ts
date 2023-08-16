import { UserPropertyType } from '@db/domain/entities/userProperties';
import { IsEmail, IsNotEmpty } from 'class-validator';

class OwnerRegistrationPropertiesDto {
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  openDate: string;
  propertyCategoryId: number;
}
export class OwnerRegisterDto {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  password: string;

  businessName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  properties: OwnerRegistrationPropertiesDto[];
}

export class OwnerAssignPropertyDto {
  propertyId: number;
  userId: number;
  userPropertyType: UserPropertyType;
}

export class SendTenancyAgreementByOwner {
  propertyId: number;
  userId: number;
  tenancyAgreementId: number;
}

// View applications list
export class OwnerViewApplicationsListReqBodyDto {}
export class OwnerViewApplicationsListReqQueryDto {}

// View applications list
export class OwnerReactToApplicationReqBodyDto {}
export class OwnerReactToApplicationReqQueryDto {}

// Auth login
export class OwnerLoginReqBodyDto {}
export class OwnerLoginReqQueryDto {}

// list complaints
export class OwnerViewComplaintsListReqBodyDto {}
export class OwnerViewComplaintsListReqQueryDto {}

// resolve complaints
export class OwnerResolveComplaintsReqBodyDto {}
export class OwnerResolveComplaintsReqQueryDto {}

// listings view list
export class OwnerListingsViewListReqBodyDto {}
export class OwnerListingsViewListReqQueryDto {}

// payments collect payment
export class OwnerPaymentsCollectPaymentReqBodyDto {}
export class OwnerPaymentsCollectPaymentReqQueryDto {}

// payments pay
export class OwnerPaymentsPayReqBodyDto {}
export class OwnerPaymentsPayReqQueryDto {}

// payments record payment
export class OwnerPaymentsRecordPaymentReqBodyDto {}
export class OwnerPaymentsRecordPaymentReqQueryDto {}

// products apply for product
export class OwnerProductsApplyForProductReqBodyDto {}
export class OwnerProductsApplyForProductReqQueryDto {}

// products view list
export class OwnerProductsViewListReqBodyDto {}
export class OwnerProductsViewListReqQueryDto {}

// properties pair with user
export class OwnerPropertiesPairWithUserReqBodyDto {}
export class OwnerPropertiesPairWithUserReqQueryDto {}

// realtors connect with realtors
export class OwnerRealtorsConnectWithRealtorsReqBodyDto {}
export class OwnerRealtorsConnectWithRealtorsReqQueryDto {}

// realtors request to represent
export class OwnerRealtorsRequestToRepresentReqBodyDto {}
export class OwnerRealtorsRequestToRepresentReqQueryDto {}

// realtors view list
export class OwnerRealtorsViewListReqBodyDto {}
export class OwnerRealtorsViewListReqQueryDto {}

// service providers apply for service
export class OwnerServiceProvidersApplyForServiceReqBodyDto {}
export class OwnerServiceProvidersApplyForServiceReqQueryDto {}

// service providers view list
export class OwnerServiceProvidersViewListReqBodyDto {}
export class OwnerServiceProvidersViewListReqQueryDto {}

// services request service
export class OwnerServicesRequestServiceReqBodyDto {}
export class OwnerServicesRequestServiceReqQueryDto {}

// tenancies create agreement
export class OwnerTenanciesCreateAgreementReqBodyDto {}
export class OwnerTenanciesCreateAgreementReqQueryDto {}

// tenancies delete agreement
export class OwnerTenanciesDeleteAgreementReqBodyDto {}
export class OwnerTenanciesDeleteAgreementReqQueryDto {}

// tenancies list agreements
export class OwnerTenanciesListAgreementsReqBodyDto {}
export class OwnerTenanciesListAgreementsReqQueryDto {}

// tenancies update agreements
export class OwnerTenanciesUpdateAgreementsReqBodyDto {}
export class OwnerTenanciesUpdateAgreementsReqQueryDto {}

// tenants create tenant
export class OwnerTenantsCreateTenantReqBodyDto {}
export class OwnerTenantsCreateTenantReqQueryDto {}

// tenants delete tenant
export class OwnerTenantsDeleteTenantReqBodyDto {}
export class OwnerTenantsDeleteTenantReqQueryDto {}

// tenants list tenants
export class OwnerTenantsListTenantsReqBodyDto {}
export class OwnerTenantsListTenantsReqQueryDto {}

// tenants send rent reminder
export class OwnerTenantsSendRentReminderReqBodyDto {}
export class OwnerTenantsSendRentReminderReqQueryDto {}

// tenants update tenant
export class OwnerTenantsUpdateTenantReqBodyDto {}
export class OwnerTenantsUpdateTenantReqQueryDto {}
