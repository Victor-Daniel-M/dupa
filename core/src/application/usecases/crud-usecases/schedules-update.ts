import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { SchedulesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/schedules.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SchedulesUpdateUsecase {
  private scheduleRepository: ScheduleRepositoryImpl;

  constructor({
    scheduleRepository,
  }: {
    scheduleRepository: ScheduleRepositoryImpl;
  }) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(data: z.infer<typeof SchedulesUpdateSchema>) {
    // @ts-ignore
    const schedule = await this.scheduleRepository.update(data.id!, data);;
    return schedule;
  }
}