import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

export const UserOfferingTypes = ['OWNER', 'BROKER', 'TENANT'] as const;

export type UserOfferingType = (typeof UserOfferingTypes)[number];

@Entity('UserOffering')
export class UserOffering extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  userOfferingType: UserOfferingType;

  @Column({ nullable: true })
  offeringId: number;

  @Column({ nullable: true })
  userId: number;

  @AfterLoad()
  protected generateLabel(): void {
    const title = `${this.userOfferingType} to Offering ${this.offeringId}`;
    const summary = `User ${this.userId} ${this.userOfferingType} to Offering ${this.offeringId}`;
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
