import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('Payment')
export class Payment extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  entityId: number;

  @Column({ nullable: true })
  entityName: string;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  paymentMethodId: number;

  @Column({ nullable: true })
  paymentCategoryId: number;

  @Column({ nullable: true })
  amount: number;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}
