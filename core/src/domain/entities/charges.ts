import { MetaValueTypes } from './_common';

export interface IChargeType {
  id?: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICharge {
  id?: string;
  value: string;
  lowerLimit: string;
  upperLimit: string;
  createdAt: string;
  updatedAt: string;
  propertyId: string;
  chargeTypeId: string;
  valueType: MetaValueTypes;
}
