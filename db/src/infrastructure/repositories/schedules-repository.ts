import { Schedule } from '@db/domain/entities/schedules';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleRepositoryImpl extends BaseRepository<Schedule> {
  constructor(
    @InjectRepository(Schedule)
    public repository: Repository<Schedule>,
  ) {
    super(repository);
  }
}
