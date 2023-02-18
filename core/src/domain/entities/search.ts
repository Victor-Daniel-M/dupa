import { CString } from '../value-objects/string';
import { MetaValueTypes } from './_common';

// Search
enum SearchType {
  AGENT_SEARCH,
  HOUSE_SEARCH,
}

export class Search {
  id: CString;
  userId: CString;
  isSaved: Boolean;
  searchType: SearchType;
  createdAt: CString;
  updatedAt: CString;
}

export class SearchMeta {
  id: String;
  key: CString;
  value: CString;
  valueType: MetaValueTypes;
  searchId: CString;
  createdAt: CString;
  updatedAt: CString;
}
