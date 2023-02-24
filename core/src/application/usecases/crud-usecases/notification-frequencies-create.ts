import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { NotificationFrequenciesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationFrequencies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationFrequenciesCreateUsecase {
  private notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;

  constructor({
    notificationFrequencyRepository,
  }: {
    notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;
  }) {
    this.notificationFrequencyRepository = notificationFrequencyRepository;
  }

  async execute(data: z.infer<typeof NotificationFrequenciesCreateSchema>) {
    // @ts-ignore
    const notificationFrequency = await this.notificationFrequencyRepository.createOrThrow(data, 'id');
    return notificationFrequency;
  }
}