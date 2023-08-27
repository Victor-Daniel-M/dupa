import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('ChargeType')
export class ChargeType extends BaseEntity {
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

@Entity('Charge')
export class Charge extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  lowerLimit: string;

  @Column({ nullable: true })
  upperLimit: string;

  @Column({ nullable: true })
  offeringId: string;

  @Column({ nullable: true })
  chargeTypeId: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;
}
