import { MetaValueTypes } from './_common';

// Propertystring
export interface IPropertyCategory {
  id?: string;
  name: string;
  code: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProperty {
  id?: string;
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
  openDate: string;
  propertyCategoryId: string;
}

export interface IPropertyMetaCategory {
  id?: string;
  code: string;
  desc: string;
  valueType: MetaValueTypes;
  createdAt: string;
  updatedAt: string;
}

export interface IPropertyMeta {
  id?: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  propertyId: string;
  parentId: string;
  propertyMetaCategoryId: string;
}
