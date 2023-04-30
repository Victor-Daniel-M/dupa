import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('PaymentCategory')
export class PaymentCategory extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}
