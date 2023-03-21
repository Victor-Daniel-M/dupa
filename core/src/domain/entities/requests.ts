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

  @Column()
  fromEntityId: string;

  @Column()
  fromEntityName: string;

  @Column()
  onEntityId: string;

  @Column()
  onEntityName: string;

  @Column()
  message: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  status: RequestStatus;

  @Column()
  requestType: RequestType;
}

@Entity('RequestMeta')
export class RequestMeta extends BaseEntity {
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
  requestId: string;

  @Column()
  valueType: MetaValueTypes;
}

@Entity('RequestUser')
export class RequestUser extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  userId: string;

  @Column()
  requestId: string;
}
