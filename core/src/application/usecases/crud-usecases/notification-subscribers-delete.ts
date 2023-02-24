import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { NotificationSubscribersDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribersDeleteUsecase {
  private notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;

  constructor({
    notificationSubscriberRepository,
  }: {
    notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;
  }) {
    this.notificationSubscriberRepository = notificationSubscriberRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribersDeleteSchema>) {
    // @ts-ignore
    const notificationSubscriber = await this.notificationSubscriberRepository.delete(data.id!);
    return notificationSubscriber;
  }
}