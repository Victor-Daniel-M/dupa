import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

@Entity('UserTenancyAgreement')
export class UserTenancyAgreement extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  propertyId: number;

  @Column({ nullable: true })
  tenancyAgreementId: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  expiresAt?: string;

  @AfterLoad()
  protected generateLabel(): void {
    const summary = `Agreement for Property ${this.propertyId} for user X`;
    // @ts-ignore
    this.label = summary;
    // @ts-ignore
    this.title = summary;
    // @ts-ignore
    this.value = this.id;
  }
}
