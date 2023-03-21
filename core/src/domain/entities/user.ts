import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

export const UserTypes = ['GUEST', 'AGENT', 'ADMIN', 'USER'] as const;

export type UserType = (typeof UserTypes)[number];

@Entity('User')
export class User extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  email?: string;

  @Column()
  password?: string;

  @Column()
  firstName?: string;

  @Column()
  lastName?: string;

  @Column()
  phoneNumber?: string;

  @Column()
  createdAt?: string;

  @Column()
  updatedAt?: string;

  @Column()
  userType?: UserType;
}

@Entity('UserMeta')
export class UserMeta extends BaseEntity {
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
  userId: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
