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

  @Column({ nullable: true })
  text: string;

  @Column({ nullable: true })
  inviteType: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}

@Entity('InviteMeta')
export class InviteMeta extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  key: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  ref: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;

  @Column({ nullable: true })
  inviteId: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;
}
