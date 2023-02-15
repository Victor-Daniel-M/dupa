import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

export class ChargeType {
  id: CString;
  name: CString;
  code: CString;
  desc: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class Charge {
  id: CString;
  value: CString;
  lowerLimit: CString;
  upperLimit: CString;
  createdAt: CString;
  updatedAt: CString;
  propertyId: CString;
  chargeTypeId: CString;
  valueType: MetaValueTypes;
}
