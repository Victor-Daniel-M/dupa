// Address
export interface IAddress {
  id?: string;
  city: string;
  street: string;
  district: string;
  region: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEntityAddress {
  id?: string;
  entityId: string;
  entityName: string;
  createdAt: string;
  updatedAt: string;
  addressId: string;
}
