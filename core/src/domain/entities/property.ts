import { MetaValueTypes } from './_common';

// Propertystring
export class PropertyCategory {
  id: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export class Property {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
  openDate: string;
  propertyCategoryId: string;
}

export class PropertyMetaCategory {
  id: string;
  code: string;
  desc: string;
  valueType: MetaValueTypes;
  createdAt: string;
  updatedAt: string;
}

export class PropertyMeta {
  id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  propertyId: string;
  parentId: string;
  propertyMetaCategoryId: string;
}
