import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('OfferingCategory')
export class OfferingCategory extends BaseEntity {
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
}

@Entity('Offering')
export class Offering extends BaseEntity {
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
  openDate: string;

  @Column({ nullable: true })
  offeringCategoryId: number;

  @Column({ nullable: true })
  businessId: number;
}

@Entity('OfferingMetaCategory')
export class OfferingMetaCategory extends BaseEntity {
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
}

@Entity('OfferingMeta')
export class OfferingMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  key: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  offeringId: string;

  @Column({ nullable: true })
  parentId: string;

  @Column({ nullable: true })
  offeringMetaCategoryId: string;
}
