import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

export const applicationTypes = ['REQUEST_TO_REPRESENT'] as const;
export type applicationTypes = (typeof applicationTypes)[number];

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

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}
