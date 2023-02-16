import { CString } from '../value-objects/string';

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
  id: CString;
  openAt: CString;
  closeAt: CString;
  entityName: CString;
  entityId: CString;
  createdAt: CString;
  updatedAt: CString;
  scheduleId: CString;
  dayOfWeek: DayOfWeek;
}
