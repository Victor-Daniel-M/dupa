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

  @Column()
  openAt: string;

  @Column()
  closeAt: string;

  @Column()
  entityName: string;

  @Column()
  entityId: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @Column()
  scheduleId: string;

  @Column()
  dayOfWeek: DayOfWeek;
}
