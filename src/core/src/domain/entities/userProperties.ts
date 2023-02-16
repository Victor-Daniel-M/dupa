import { CString } from '../value-objects/string';

export enum UserPropertyType {
  OWNER,
  BROKER,
}

export class UserProperty {
  id: CString;
  userPropertyType: UserPropertyType;
  propertyId: CString;
  userId: CString;
}
