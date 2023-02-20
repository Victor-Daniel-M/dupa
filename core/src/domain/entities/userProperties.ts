export enum UserPropertyType {
  OWNER,
  BROKER,
}

export class UserProperty {
  id: string;
  userPropertyType: UserPropertyType;
  propertyId: string;
  userId: string;
}
