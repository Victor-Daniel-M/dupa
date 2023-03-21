import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

// Search
enum SearchType {
  AGENT_SEARCH,
  HOUSE_SEARCH,
}

@Entity('Search')
export class Search extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  userId: string;

  @Column()
  isSaved: Boolean;

  @Column()
  searchType: SearchType;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('SearchMeta')
export class SearchMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  valueType: MetaValueTypes;

  @Column()
  searchId: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
