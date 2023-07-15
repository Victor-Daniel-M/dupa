import { IsEmail, IsNotEmpty } from 'class-validator';

export class SearcherRegisterDto {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class SearcherLoginDto {
  email: string;
  password: string;
}
