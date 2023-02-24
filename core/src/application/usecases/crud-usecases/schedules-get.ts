import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { SchedulesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/schedules.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SchedulesGetUsecase {
  private scheduleRepository: ScheduleRepositoryImpl;

  constructor({
    scheduleRepository,
  }: {
    scheduleRepository: ScheduleRepositoryImpl;
  }) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(data: z.infer<typeof SchedulesGetSchema>) {
    // @ts-ignore
    const schedule = await this.scheduleRepository.findAll();
    return schedule;
  }
}