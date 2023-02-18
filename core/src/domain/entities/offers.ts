import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

export class Offer {
  id: CString;
  fromEntityId: CString;
  fromEntityName: CString;
  onEntityId: CString;
  onEntityName: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class OfferMeta {
  id: CString;
  key: CString;
  value: CString;
  createdAt: CString;
  updatedAt: CString;
  offerId: CString;
  valueType: MetaValueTypes;
}
