import { MetaValueTypes } from './_common';

export class AuthStrategy {
  id: string;
  name: string;
  desc: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export class AuthStrategyMeta {
  id: string;
  key: string;
  value: string;
  valueType: MetaValueTypes;
  authStrategyId: string;
  createdAt: string;
  updatedAt: string;
}
