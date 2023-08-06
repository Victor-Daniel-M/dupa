import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('PaymentMethod')
export class PaymentMethod extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  code: string;
}
