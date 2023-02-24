import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { NotificationSubscribersGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribersGetUsecase {
  private notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;

  constructor({
    notificationSubscriberRepository,
  }: {
    notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;
  }) {
    this.notificationSubscriberRepository = notificationSubscriberRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribersGetSchema>) {
    // @ts-ignore
    const notificationSubscriber = await this.notificationSubscriberRepository.findAll();
    return notificationSubscriber;
  }
}