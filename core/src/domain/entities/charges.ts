import { MetaValueTypes } from './_common';

export class ChargeType {
  id: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export class Charge {
  id: string;
  value: string;
  lowerLimit: string;
  upperLimit: string;
  createdAt: string;
  updatedAt: string;
  propertyId: string;
  chargeTypeId: string;
  valueType: MetaValueTypes;
}
