import { MetaValueTypes } from './_common';

export enum RequestType {
  TOUR,
  SELL_HOME,
}

export enum RequestStatus {
  ACCEPTED,
  REJECTED,
}

export interface IRequest {
  id?: string;
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

export interface IRequestMeta {
  id?: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  requestId: string;
  valueType: MetaValueTypes;
}

export interface IRequestUser {
  id?: string;
  userId: string;
  requestId: string;
}
