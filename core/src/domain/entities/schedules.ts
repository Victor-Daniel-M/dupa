import { BaseEntity } from 'base/base.entity';
import { Column, Entity } from 'typeorm';

export enum DayOfWeek {
  MON,
  TUE,
  WED,
  THUR,
  FRI,
  SAT,
  SUN,
}

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
  entityName: string;

  @Column({ nullable: true })
  entityId: string;

  @Column({ nullable: true })
  createdAt: string;

  @Column({ nullable: true })
  updatedAt: string;

  @Column({ nullable: true })
  scheduleId: string;

  @Column({ nullable: true })
  dayOfWeek: DayOfWeek;
}
