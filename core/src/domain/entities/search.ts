import { MetaValueTypes } from './_common';

// Search
enum SearchType {
  AGENT_SEARCH,
  HOUSE_SEARCH,
}

export interface ISearch {
  id?: string;
  userId: string;
  isSaved: Boolean;
  searchType: SearchType;
  createdAt: string;
  updatedAt: string;
}

export interface ISearchMeta {
  id?: string;
  key: string;
  value: string;
  valueType: MetaValueTypes;
  searchId: string;
  createdAt: string;
  updatedAt: string;
}
