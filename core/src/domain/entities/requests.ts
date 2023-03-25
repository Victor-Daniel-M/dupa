import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';
import { MetaValueTypes } from './_common';

export enum RequestType {
  TOUR,
  SELL_HOME,
}

export enum RequestStatus {
  ACCEPTED,
  REJECTED,
}

@Entity('Request')
export class Request extends BaseEntity {
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
  message: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;

  @Column({ nullable: true })
  status: RequestStatus;

  @Column({ nullable: true })
  requestType: RequestType;
}

@Entity('RequestMeta')
export class RequestMeta extends BaseEntity {
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
  requestId: string;

  @Column({ nullable: true })
  valueType: MetaValueTypes;
}

@Entity('RequestUser')
export class RequestUser extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  requestId: string;
}
