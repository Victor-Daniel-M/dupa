import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { NotificationFrequenciesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationFrequencies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationFrequenciesDeleteUsecase {
  private notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;

  constructor({
    notificationFrequencyRepository,
  }: {
    notificationFrequencyRepository: NotificationFrequencyRepositoryImpl;
  }) {
    this.notificationFrequencyRepository = notificationFrequencyRepository;
  }

  async execute(data: z.infer<typeof NotificationFrequenciesDeleteSchema>) {
    // @ts-ignore
    const notificationFrequency = await this.notificationFrequencyRepository.delete(data.id!);
    return notificationFrequency;
  }
}