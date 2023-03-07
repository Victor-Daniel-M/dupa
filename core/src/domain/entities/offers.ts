import { MetaValueTypes } from './_common';

export interface IOffer {
  id?: string;
  fromEntityId: string;
  fromEntityName: string;
  onEntityId: string;
  onEntityName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IOfferMeta {
  id?: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  offerId: string;
  valueType: MetaValueTypes;
}
