import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('Place')
export class Place extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('PlaceMeta')
export class PlaceMeta extends BaseEntity {
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
  placeId: string;

  @Column()
  valueType: MetaValueTypes;
}
