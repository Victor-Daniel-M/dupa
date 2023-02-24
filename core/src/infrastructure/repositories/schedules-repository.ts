import { Schedule } from '@core/domain/entities/schedules';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ScheduleRepositoryImpl extends RepositoryImpl<Schedule> {}
