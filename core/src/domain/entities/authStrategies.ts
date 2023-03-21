import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

@Entity('AuthStrategy')
export class AuthStrategy extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  code: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('AuthStrategyMeta')
export class AuthStrategyMeta extends BaseEntity {
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
  authStrategyId: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
