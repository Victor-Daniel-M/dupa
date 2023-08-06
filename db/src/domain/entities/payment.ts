import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

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

  @AfterLoad()
  protected generateLabel(): void {
    const title = `Payment Category ${this.paymentCategoryId}`;
    const summary = `Payment Category ${this.paymentCategoryId} via payment Method ${this.paymentMethodId} for ${this.entityName} ${this.entityId}`;
    // @ts-ignore
    this.label = title;
    // @ts-ignore
    this.description = summary;
    // @ts-ignore
    this.title = title;
    // @ts-ignore
    this.value = this.id;
  }
}
