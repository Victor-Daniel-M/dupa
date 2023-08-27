import { ApplicationType, ReactionType } from '@db/domain/entities';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApplicationDto, MessageDto, ReactionDto } from './general.dto';

// complaints create complaint
export class TenantComplaintsCreateComplaintReqBodyDto {
  offeringId: number;
  userId: number;
  title: string;
  description: string;
}
export class TenantComplaintsCreateComplaintReqQueryDto {}

// complaints delete complaint
export class TenantComplaintsDeleteComplaintReqBodyDto {}
export class TenantComplaintsDeleteComplaintReqQueryDto {}

// complaints update complaint
export class TenantComplaintsUpdateComplaintReqBodyDto {}
export class TenantComplaintsUpdateComplaintReqQueryDto {}

// payments make payment
export class TenantPaymentsMakePaymentReqBodyDto {
  entityId: number;
  entityName: string;
  userId: number;
  paymentMethodId: number;
  paymentCategoryId: number;
  amount: number;
}
export class TenantPaymentsMakePaymentReqQueryDto {}

// products apply for product
export class TenantProductsApplyForProductReqBodyDto {}
export class TenantProductsApplyForProductReqQueryDto {}

// products list products
export class TenantProductsListProductsReqBodyDto {}
export class TenantProductsListProductsReqQueryDto {}

// service providers list service providers
export class TenantServiceProvidersListServiceProvidersReqBodyDto {}
export class TenantServiceProvidersListServiceProvidersReqQueryDto {}

// services apply for service
export class TenantServicesApplyForServiceReqBodyDto {}
export class TenantServicesApplyForServiceReqQueryDto {}

// services list services
export class TenantServicesListServicesReqBodyDto {}
export class TenantServicesListServicesReqQueryDto {}

// tenancies end tenancy
export class TenantTenanciesEndTenancyReqBodyDto {}
export class TenantTenanciesEndTenancyReqQueryDto {}

// tenancies list agreements
export class TenantTenanciesListAgreementsReqBodyDto {}
export class TenantTenanciesListAgreementsReqQueryDto {}

// tenancies view agreement
export class TenantTenanciesViewAgreementReqBodyDto {}
export class TenantTenanciesViewAgreementReqQueryDto {}
