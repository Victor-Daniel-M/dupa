import { MetaValueTypes } from './_common';

export const UserTypes = [
  'PROPERTY_ADMIN',
  'SYSTEM_ADMIN',
  'TENANT',
  'REALTOR',
] as const;

export type UserType = (typeof UserTypes)[number];

export interface IUser {
  id?: string;
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  userType?: UserType | null;
}

export interface IUserMeta {
  id?: string;
  key: string;
  value: string;
  valueType: MetaValueTypes;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
