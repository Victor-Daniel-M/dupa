import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('BusinessOfferingCategory')
export class BusinessOfferingCategory extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  businessId: number;

  @Column({ nullable: true })
  offeringCategoryId: number;
}
