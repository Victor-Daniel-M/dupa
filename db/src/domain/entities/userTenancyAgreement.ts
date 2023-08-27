import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

export const agreementStatusTypes = [
  'ACCEPTED',
  'REJECTED',
  'PENDING',
] as const;
export type AgreementStatusType = (typeof agreementStatusTypes)[number];

@Entity('UserTenancyAgreement')
export class UserTenancyAgreement extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  offeringId: number;

  @Column({ nullable: true })
  tenancyAgreementId: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  expiresAt?: string;

  @Column({ nullable: true, enum: agreementStatusTypes, default: 'PENDING' })
  status?: AgreementStatusType;

  @AfterLoad()
  protected generateLabel(): void {
    const summary = `Agreement for Offering ${this.offeringId} for user X`;
    // @ts-ignore
    this.label = summary;
    // @ts-ignore
    this.title = summary;
    // @ts-ignore
    this.value = this.id;
  }
}
