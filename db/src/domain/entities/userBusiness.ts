import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('UserBusiness')
export class UserBusiness extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  businessId: number;

  @Column({ nullable: true })
  userId: number;
}
