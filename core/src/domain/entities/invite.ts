import { MetaValueTypes } from './_common';

export enum InviteType {
  VIEW_PROPERTY,
}

export class Invite {
  id: string;
  text: string;
  inviteType: string;
  createdAt: string;
  updatedAt: string;
}

export class InviteMeta {
  id: string;
  key: string;
  value: string;
  ref: string;
  createdAt: string;
  updatedAt: string;
  inviteId: string;
  valueType: MetaValueTypes;
}
