import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

export enum UserPropertyType {
  OWNER,
  BROKER,
}

@Entity('UserProperty')
export class UserProperty extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column()
  userPropertyType: UserPropertyType;

  @Column()
  propertyId: string;

  @Column()
  userId: string;
}
