import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { SchedulesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/schedules.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SchedulesDeleteUsecase {
  private scheduleRepository: ScheduleRepositoryImpl;

  constructor({
    scheduleRepository,
  }: {
    scheduleRepository: ScheduleRepositoryImpl;
  }) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(data: z.infer<typeof SchedulesDeleteSchema>) {
    // @ts-ignore
    const schedule = await this.scheduleRepository.delete(data.id!);
    return schedule;
  }
}