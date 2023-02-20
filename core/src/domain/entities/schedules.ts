export enum DayOfWeek {
  MON,
  TUE,
  WED,
  THUR,
  FRI,
  SAT,
  SUN,
}

export class Schedule {
  id: string;
  openAt: string;
  closeAt: string;
  entityName: string;
  entityId: string;
  createdAt: string;
  updatedAt: string;
  scheduleId: string;
  dayOfWeek: DayOfWeek;
}
