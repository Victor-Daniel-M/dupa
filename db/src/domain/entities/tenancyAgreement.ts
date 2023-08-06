import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

@Entity('TenancyAgreement')
export class TenancyAgreement extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  propertyId: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  expiresAt?: string;

  @AfterLoad()
  protected generateLabel(): void {
    const summary = `Agreement for Property ${this.propertyId}`;
    // @ts-ignore
    this.label = summary;
    // @ts-ignore
    this.title = summary;
    // @ts-ignore
    this.value = this.id;
  }
}
