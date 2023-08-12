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
