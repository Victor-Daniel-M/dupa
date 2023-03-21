import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('ChargeType')
export class ChargeType extends BaseEntity {
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

@Entity('Charge')
export class Charge extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  value: string;

  @Column()
  lowerLimit: string;

  @Column()
  upperLimit: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  propertyId: string;

  @Column()
  chargeTypeId: string;

  @Column()
  valueType: MetaValueTypes;
}
