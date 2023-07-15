import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

export const complaintStatusTypes = [
  'IN_PROGESS',
  'RESOLVED',
  'PENDING',
  'NOT_YET_RECEIVED',
  'RECEIVED',
] as const;
export type complaintStatusType = (typeof complaintStatusTypes)[number];

@Entity('Complaint')
export class Complaint extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  propertyId: number;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  status: complaintStatusType;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;
}
