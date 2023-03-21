import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('PropertyCategory')
export class PropertyCategory extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  desc: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('Property')
export class Property extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  coverImage: string;

  @Column()
  cost: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  openDate: string;

  @Column()
  propertyCategoryId: string;
}

@Entity('PropertyMetaCategory')
export class PropertyMetaCategory extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  code: string;

  @Column()
  desc: string;

  @Column()
  valueType: MetaValueTypes;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('PropertyMeta')
export class PropertyMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  propertyId: string;

  @Column()
  parentId: string;

  @Column()
  propertyMetaCategoryId: string;
}
