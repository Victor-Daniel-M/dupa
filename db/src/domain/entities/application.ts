import { BaseEntity } from '../../../../base/base.entity';
import { AfterLoad, Column, Entity } from 'typeorm';

export const applicationTypes = [
  'REQUEST_TO_REPRESENT',
  'REQUEST_TO_VISIT',
] as const;
export type applicationTypes = (typeof applicationTypes)[number];

export type ApplicationType = { label: string; id: number };

@Entity('Application')
export class Application extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  applicationType: applicationTypes;

  @Column({ nullable: true })
  refEntityId: number;

  @Column({ nullable: true })
  refEntityName: string;

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
