import { MetaValueTypes } from './_common';

export enum InviteType {
  VIEW_PROPERTY,
}

export interface IInvite {
  id?: string;
  text: string;
  inviteType: string;
  createdAt: string;
  updatedAt: string;
}

export interface IInviteMeta {
  id?: string;
  key: string;
  value: string;
  ref: string;
  createdAt: string;
  updatedAt: string;
  inviteId: string;
  valueType: MetaValueTypes;
}
