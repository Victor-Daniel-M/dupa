import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

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

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}
