import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { SchedulesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/schedules.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SchedulesViewUsecase {
  private scheduleRepository: ScheduleRepositoryImpl;

  constructor({
    scheduleRepository,
  }: {
    scheduleRepository: ScheduleRepositoryImpl;
  }) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(data: z.infer<typeof SchedulesViewSchema>) {
    // @ts-ignore
    const schedule = await this.scheduleRepository.findOrThrow(data);
    return schedule;
  }
}