import { CString } from '../value-objects/string';

export enum ConfigType {
  TERMS,
}

export class Config {
  id: CString;
  text: CString;
  value: CString;
  createdAt: CString;
  updatedAt: CString;
}
