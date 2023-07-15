import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

export const UserPropertyTypes = ['OWNER', 'BROKER', 'TENANT'] as const;

export type UserPropertyType = (typeof UserPropertyTypes)[number];

@Entity('UserProperty')
export class UserProperty extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  userPropertyType: UserPropertyType;

  @Column({ nullable: true })
  propertyId: number;

  @Column({ nullable: true })
  userId: number;
}
