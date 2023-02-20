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
  id: string;
  fromEntityId: string;
  fromEntityName: string;
  onEntityId: string;
  onEntityName: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  status: RequestStatus;
  requestType: RequestType;
}

export class RequestMeta {
  id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  requestId: string;
  valueType: MetaValueTypes;
}

export class RequestUser {
  id: string;
  userId: string;
  requestId: string;
}
