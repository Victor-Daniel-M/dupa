import {
  ApplicationType,
  DayOfWeek,
  ReactionType,
  ScheduleType,
} from '@db/domain/entities';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApplicationDto, MessageDto, ReactionDto } from './general.dto';
import { BusinessAndUserQueryDto, UserQueryDto } from './owner.controllers.dto';

class RealtorRegistrationOfferingsDto {
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  openDate: string;
  offeringCategoryId: number;
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

  offerings: RealtorRegistrationOfferingsDto[];
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

// offering list
export class RealtorViewOfferingListReqBodyDto {}
export class RealtorViewOfferingListReqQueryDto extends UserQueryDto {}

// Owner list
export class RealtorViewOwnerListReqBodyDto {}
export class RealtorViewOwnerListReqQueryDto {}

// Owner request list
export class RealtorViewOwnerRequestListReqBodyDto {}
export class RealtorViewOwnerRequestListReqQueryDto {}

// Create messaage
export class RealtorCreateMessageReqBodyDto extends MessageDto {}
export class RealtorCreateMessageReqQueryDto {}

// Connect with offering owners
export class RealtorConnectWithOwnersReqBodyDto {}
export class RealtorConnectWithOwnersReqQueryDto {}

// Handover offering
export class RealtorHandoverOfferingReqBodyDto {}
export class RealtorHandoverOfferingReqQueryDto {}

// Record offering
export class RealtorRecordOfferingReqBodyDto {}
export class RealtorRecordOfferingReqQueryDto {}

// Get sales list
export class RealtorViewSalesListOfferingReqBodyDto {}
export class RealtorViewSalesListOfferingReqQueryDto {}

// Get sales list
export class RealtorRecordOfferingSaleReqBodyDto {}
export class RealtorRecordOfferingSaleReqQueryDto {}

// create schedule
export class RealtorCreateScheduleReqBodyDto {
  fromEntityId: number;
  fromEntityName: string;
  toEntityId: number;
  toEntityName: string;
  scheduleType: ScheduleType;
  openAt: string;
  closeAt: string;
  dayOfWeek: DayOfWeek;
}
export class RealtorCreateScheduleReqQueryDto {}

// Realtor login
export class RealtorLoginDto {}
