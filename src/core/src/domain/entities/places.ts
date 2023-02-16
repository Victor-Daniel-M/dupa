import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

export class Place {
  id: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class PlaceMeta {
  id: CString;
  key: CString;
  value: CString;
  createdAt: CString;
  updatedAt: CString;
  placeId: CString;
  valueType: MetaValueTypes;
}
