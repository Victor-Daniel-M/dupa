import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { NotificationFrequenciesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationFrequencies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationFrequenciesGetUsecase {
  private notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;

  constructor({
    notificationFrequencyRepository,
  }: {
    notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;
  }) {
    this.notificationFrequencyRepository = notificationFrequencyRepository;
  }

  async execute(data: z.infer<typeof NotificationFrequenciesGetSchema>) {
    // @ts-ignore
    const notificationFrequency = await this.notificationFrequencyRepository.findAll();
    return notificationFrequency;
  }
}