import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { BaseController } from 'base/base.controller';
import { Schedule } from '@core/domain/entities/schedules';

@ApiTags('schedules')
@Controller('schedules')
export class ScheduleController extends BaseController<Schedule> {
  constructor(private readonly scheduleRepository: ScheduleRepositoryImpl) {
    super(scheduleRepository);
  }
}
