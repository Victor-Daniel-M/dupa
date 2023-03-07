import { MetaValueTypes } from './_common';

export interface IAuthStrategy {
  id?: string;
  name: string;
  desc: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthStrategyMeta {
  id?: string;
  key: string;
  value: string;
  valueType: MetaValueTypes;
  authStrategyId: string;
  createdAt: string;
  updatedAt: string;
}
