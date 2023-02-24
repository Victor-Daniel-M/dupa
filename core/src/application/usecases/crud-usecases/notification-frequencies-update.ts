import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { NotificationFrequenciesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationFrequencies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationFrequenciesUpdateUsecase {
  private notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;

  constructor({
    notificationFrequencyRepository,
  }: {
    notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;
  }) {
    this.notificationFrequencyRepository = notificationFrequencyRepository;
  }

  async execute(data: z.infer<typeof NotificationFrequenciesUpdateSchema>) {
    // @ts-ignore
    const notificationFrequency = await this.notificationFrequencyRepository.update(data.id!, data);;
    return notificationFrequency;
  }
}