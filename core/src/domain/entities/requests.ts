import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

export enum RequestType {
  TOUR,
  SELL_HOME,
}

export enum RequestStatus {
  ACCEPTED,
  REJECTED,
}

export class Request {
  id: CString;
  fromEntityId: CString;
  fromEntityName: CString;
  onEntityId: CString;
  onEntityName: CString;
  message: CString;
  createdAt: CString;
  updatedAt: CString;
  status: RequestStatus;
  requestType: RequestType;
}

export class RequestMeta {
  id: CString;
  key: CString;
  value: CString;
  createdAt: CString;
  updatedAt: CString;
  requestId: CString;
  valueType: MetaValueTypes;
}

export class RequestUser {
  id: CString;
  userId: CString;
  requestId: CString;
}
