import { IsEmail, IsNotEmpty } from 'class-validator';

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

export class RealtorRequestToRepresentReqBodyDto {}

export class RealtorRequestToRepresentReqQueryDto {}
