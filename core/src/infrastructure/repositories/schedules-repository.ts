import { Schedule } from '@core/domain/entities/schedules';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ScheduleRepositoryImpl extends BaseRepository<Schedule> {}
