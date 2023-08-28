import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

export const applicationTypes = [
  'REQUEST_TO_REPRESENT',
  'REQUEST_TO_VISIT',
  'REQUEST_TO_PROVIDE_OFFERING',
  'REQUEST_OFFERING',
] as const;
export type ApplicationType = (typeof applicationTypes)[number];

export const applicationStatusTypes = [
  'ACCEPTED',
  'REJECTED',
  'PENDING',
] as const;
export type ApplicationStatusType = (typeof applicationStatusTypes)[number];

@Entity('Application')
export class Application extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  applicationType: ApplicationType;

  @Column({ nullable: true })
  refEntityId: number;

  @Column({ nullable: true })
  businessId?: number;

  @Column({ nullable: true })
  refEntityName: string;

  @Column({ nullable: true, default: 'PENDING' })
  status?: ApplicationStatusType;

  @AfterLoad()
  protected generateLabel(): void {
    const summary = `Application for ${this.refEntityName} ${this.refEntityId} By User ${this.userId}`;
    // @ts-ignore
    this.label = summary;
    // @ts-ignore
    this.description = summary;
    // @ts-ignore
    this.title = this.applicationType;
    // @ts-ignore
    this.value = this.id;
  }
}
