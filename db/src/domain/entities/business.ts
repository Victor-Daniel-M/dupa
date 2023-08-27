import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

export const BusinessTypes = ['REALTOR', 'PROVIDER', 'OWNER'] as const;

export type BusinessType = (typeof BusinessTypes)[number];

@Entity('Business')
export class Business extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  type: BusinessType;
}

//TODO: Think about locations
