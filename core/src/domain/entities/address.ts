import { CString } from '../value-objects/string';

// Address
export class Address {
  id: CString;
  city: CString;
  street: CString;
  district: CString;
  region: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class EntityAddress {
  id: CString;
  entityId: CString;
  entityName: CString;
  createdAt: CString;
  updatedAt: CString;
  addressId: CString;
}
