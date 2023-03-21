import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('Offer')
export class Offer extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  fromEntityId: string;

  @Column()
  fromEntityName: string;

  @Column()
  onEntityId: string;

  @Column()
  onEntityName: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('OfferMeta')
export class OfferMeta extends BaseEntity {
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
  offerId: string;

  @Column()
  valueType: MetaValueTypes;
}
