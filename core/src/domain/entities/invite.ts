import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

export enum InviteType {
  VIEW_PROPERTY,
}

export class Invite {
  id: CString;
  text: CString;
  inviteType: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class InviteMeta {
  id: CString;
  key: CString;
  value: CString;
  ref: CString;
  createdAt: CString;
  updatedAt: CString;
  inviteId: CString;
  valueType: MetaValueTypes;
}
