// Address
export class Address {
  id: string;
  city: string;
  street: string;
  district: string;
  region: string;
  createdAt: string;
  updatedAt: string;
}

export class EntityAddress {
  id: string;
  entityId: string;
  entityName: string;
  createdAt: string;
  updatedAt: string;
  addressId: string;
}
