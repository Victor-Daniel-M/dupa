import { MetaValueTypes } from './_common';

export class Offer {
  id: string;
  fromEntityId: string;
  fromEntityName: string;
  onEntityId: string;
  onEntityName: string;
  createdAt: string;
  updatedAt: string;
}

export class OfferMeta {
  id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  offerId: string;
  valueType: MetaValueTypes;
}
