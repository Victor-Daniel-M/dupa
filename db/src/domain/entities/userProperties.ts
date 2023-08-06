import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

export const UserPropertyTypes = ['OWNER', 'BROKER', 'TENANT'] as const;

export type UserPropertyType = (typeof UserPropertyTypes)[number];

@Entity('UserProperty')
export class UserProperty extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  userPropertyType: UserPropertyType;

  @Column({ nullable: true })
  propertyId: number;

  @Column({ nullable: true })
  userId: number;

  @AfterLoad()
  protected generateLabel(): void {
    const title = `${this.userPropertyType} to Property ${this.propertyId}`;
    const summary = `User ${this.userId} ${this.userPropertyType} to Property ${this.propertyId}`;
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
