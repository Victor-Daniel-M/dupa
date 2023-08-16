import { ApplicationType, ReactionType } from '@db/domain/entities';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApplicationDto, MessageDto, ReactionDto } from './general.dto';

class RealtorRegistrationPropertiesDto {
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  openDate: string;
  propertyCategoryId: number;
}
export class RealtorRegisterDto {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  password: string;

  businessName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  properties: RealtorRegistrationPropertiesDto[];
}

export class RealtorRequestToRepresentReqBodyDto extends ApplicationDto {}

export class RealtorRequestToRepresentReqQueryDto {
  businessId: string;
}

// visit requests
export class RealtorViewVisitRequestsReqBodyDto {}
export class RealtorViewVisitRequestsReqQueryDto {}

// visit requests react
export class RealtorReactToVisitRequestReqBodyDto extends ReactionDto {}
export class RealtorReactToVisitRequestReqQueryDto {}

// property list
export class RealtorViewPropertyListReqBodyDto {}
export class RealtorViewPropertyListReqQueryDto {}

// Owner list
export class RealtorViewOwnerListReqBodyDto {}
export class RealtorViewOwnerListReqQueryDto {}

// Owner request list
export class RealtorViewOwnerRequestListReqBodyDto {}
export class RealtorViewOwnerRequestListReqQueryDto {}

// Create messaage
export class RealtorCreateMessageReqBodyDto extends MessageDto {}
export class RealtorCreateMessageReqQueryDto {}

// Connect with property owners
export class RealtorConnectWithOwnersReqBodyDto {}
export class RealtorConnectWithOwnersReqQueryDto {}

// Handover property
export class RealtorHandoverPropertyReqBodyDto {}
export class RealtorHandoverPropertyReqQueryDto {}

// Record property
export class RealtorRecordPropertyReqBodyDto {}
export class RealtorRecordPropertyReqQueryDto {}

// Get sales list
export class RealtorViewSalesListPropertyReqBodyDto {}
export class RealtorViewSalesListPropertyReqQueryDto {}

// Get sales list
export class RealtorRecordPropertySaleReqBodyDto {}
export class RealtorRecordPropertySaleReqQueryDto {}

// Realtor login
export class RealtorLoginDto {}
