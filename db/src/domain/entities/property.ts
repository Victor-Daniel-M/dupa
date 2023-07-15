import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('PropertyCategory')
export class PropertyCategory extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}

@Entity('Property')
export class Property extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column({ nullable: true })
  cost: number;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;

  @Column({ nullable: true })
  openDate: string;

  @Column({ nullable: true })
  propertyCategoryId: string;
}

@Entity('PropertyMetaCategory')
export class PropertyMetaCategory extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  desc: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}

@Entity('PropertyMeta')
export class PropertyMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  key: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;

  @Column({ nullable: true })
  propertyId: string;

  @Column({ nullable: true })
  parentId: string;

  @Column({ nullable: true })
  propertyMetaCategoryId: string;
}