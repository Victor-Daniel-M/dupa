import { MetaValueTypes } from './_common';

export interface IPlace {
  id?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPlaceMeta {
  id?: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  placeId: string;
  valueType: MetaValueTypes;
}
