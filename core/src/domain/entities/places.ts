import { MetaValueTypes } from './_common';

export class Place {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export class PlaceMeta {
  id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  placeId: string;
  valueType: MetaValueTypes;
}
