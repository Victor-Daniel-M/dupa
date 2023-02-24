import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { NotificationFrequenciesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationFrequencies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationFrequenciesViewUsecase {
  private notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;

  constructor({
    notificationFrequencyRepository,
  }: {
    notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;
  }) {
    this.notificationFrequencyRepository = notificationFrequencyRepository;
  }

  async execute(data: z.infer<typeof NotificationFrequenciesViewSchema>) {
    // @ts-ignore
    const notificationFrequency = await this.notificationFrequencyRepository.findOrThrow(data);
    return notificationFrequency;
  }
}