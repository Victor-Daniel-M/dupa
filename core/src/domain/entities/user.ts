import { Email } from '../value-objects/email';
import { Password } from '../value-objects/password';
import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

enum UserType {
  GUEST,
  AGENT,
  ADMIN,
  USER,
}

export class User {
  id?: CString;
  email?: Email;
  password?: Password;
  firstName?: CString;
  lastName?: CString;
  phoneNumber?: CString;
  createdAt?: CString;
  updatedAt?: CString;
  userType?: UserType;
}

export class UserMeta {
  id?: CString;
  key: CString;
  value: CString;
  valueType: MetaValueTypes;
  userId: CString;
  createdAt: CString;
  updatedAt: CString;
}
