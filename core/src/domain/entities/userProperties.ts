export enum UserPropertyType {
  OWNER,
  BROKER,
}

export interface IUserProperty {
  id?: string;
  userPropertyType: UserPropertyType;
  propertyId: string;
  userId: string;
}
