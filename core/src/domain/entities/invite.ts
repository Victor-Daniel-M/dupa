import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

export enum InviteType {
  VIEW_PROPERTY,
}

@Entity('Invite')
export class Invite extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  text: string;

  @Column()
  inviteType: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('InviteMeta')
export class InviteMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  ref: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  inviteId: string;

  @Column()
  valueType: MetaValueTypes;
}
