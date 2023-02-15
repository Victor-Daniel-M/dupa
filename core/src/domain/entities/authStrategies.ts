import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

export class AuthStrategy {
  id: CString;
  name: CString;
  desc: CString;
  code: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class AuthStrategyMeta {
  id: CString;
  key: CString;
  value: CString;
  valueType: MetaValueTypes;
  authStrategyId: CString;
  createdAt: CString;
  updatedAt: CString;
}
