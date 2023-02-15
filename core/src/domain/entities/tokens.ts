import { CString } from '../value-objects/string';

export class Tokens {
  id?: CString;
  key: CString;
  value: CString;
  entityName: CString;
  entityId: CString;
  expiresAt: CString;
  createdAt: CString;
  updatedAt: CString;
}
