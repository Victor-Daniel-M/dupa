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

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  isSaved: Boolean;

  @Column({ nullable: true })
  searchType: SearchType;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;
}

@Entity('SearchMeta')
export class SearchMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  key: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;

  @Column({ nullable: true })
  searchId: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;
}
