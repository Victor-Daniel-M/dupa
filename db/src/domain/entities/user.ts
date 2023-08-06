import { BaseEntity } from '../../../../base/base.entity';
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

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  password?: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  userType?: UserType;
}

@Entity('UserMeta')
export class UserMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  key: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;

  @Column({ nullable: true })
  userId: string;
}
