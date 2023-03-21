import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Address')
export class Address extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  region: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}

@Entity('EntityAddress')
export class EntityAddress extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  entityId: string;

  @Column()
  entityName: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  addressId: string;
}
