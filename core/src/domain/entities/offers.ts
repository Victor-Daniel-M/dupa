import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('Offer')
export class Offer extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  fromEntityId: string;

  @Column({ nullable: true })
  fromEntityName: string;

  @Column({ nullable: true })
  onEntityId: string;

  @Column({ nullable: true })
  onEntityName: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}

@Entity('OfferMeta')
export class OfferMeta extends BaseEntity {
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
  offerId: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;
}
