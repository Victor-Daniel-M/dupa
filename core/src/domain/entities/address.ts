import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Address')
export class Address extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  region: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}

@Entity('EntityAddress')
export class EntityAddress extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  entityId: string;

  @Column({ nullable: true })
  entityName: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;

  @Column({ nullable: true })
  addressId: string;
}
