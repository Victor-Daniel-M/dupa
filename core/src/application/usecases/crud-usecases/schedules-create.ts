import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
import { SchedulesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/schedules.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class SchedulesCreateUsecase {
  private scheduleRepository: ScheduleRepositoryImpl;

  constructor({
    scheduleRepository,
  }: {
    scheduleRepository: ScheduleRepositoryImpl;
  }) {
    this.scheduleRepository = scheduleRepository;
  }

  async execute(data: z.infer<typeof SchedulesCreateSchema>) {
    // @ts-ignore
    const schedule = await this.scheduleRepository.createOrThrow(data, 'id');
    return schedule;
  }
}