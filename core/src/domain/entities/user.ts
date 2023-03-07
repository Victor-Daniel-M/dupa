import { MetaValueTypes } from './_common';

export const UserTypes = ['GUEST', 'AGENT', 'ADMIN', 'USER'] as const;

export type UserType = (typeof UserTypes)[number];

export interface IUser {
  id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  createdAt?: string;
  updatedAt?: string;
  userType?: UserType;
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
