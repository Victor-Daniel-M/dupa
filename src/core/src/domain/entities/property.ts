import { Decimal } from '../value-objects/decimal';
import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

// PropertyCString
export class PropertyCategory {
  id: CString;
  name: CString;
  code: CString;
  desc: CString;
  cost: Decimal;
  createdAt: CString;
  updatedAt: CString;
}

export class Property {
  id: CString;
  coverImage: CString;
  createdAt: CString;
  updatedAt: CString;
  openDate: CString;
  propertyCategoryId: CString;
}

export class PropertyMetaCategories {
  id: CString;
  code: CString;
  desc: CString;
  createdAt: CString;
  updatedAt: CString;
}

export class PropertyMeta {
  id: CString;
  key: CString;
  value: CString;
  valueType: MetaValueTypes;

  createdAt: CString;
  updatedAt: CString;
  propertyId: CString;
  parentId: CString;
  propertyMetaCategoriesId: CString;
}
