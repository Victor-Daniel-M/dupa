import { BaseEntity } from '../../../../base/base.entity';
import { Column, Entity } from 'typeorm';

export const DayOfWeeks = [
  'MON',
  'TUE',
  'WED',
  'THUR',
  'FRI',
  'SAT',
  'SUN',
] as const;

export type DayOfWeek = (typeof DayOfWeeks)[number];

export const ScheduleTypes = ['PROPERTY_VISIT_SCHEDULE'] as const;

export type ScheduleType = (typeof ScheduleTypes)[number];

@Entity('Schedule')
export class Schedule extends BaseEntity {
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }

  @Column({ nullable: true })
  openAt: string;

  @Column({ nullable: true })
  closeAt: string;

  @Column({ nullable: true })
  fromEntityName: string;

  @Column({ nullable: true })
  fromEntityId: number;

  @Column({ nullable: true })
  toEntityName: string;

  @Column({ nullable: true })
  toEntityId: number;

  @Column({ nullable: true })
  createdAt?: string;

  @Column({ nullable: true })
  updatedAt?: string;

  @Column({ nullable: true })
  dayOfWeek: DayOfWeek;

  @Column({ nullable: true })
  scheduleType: ScheduleType;
}
