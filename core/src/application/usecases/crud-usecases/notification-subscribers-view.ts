import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { NotificationSubscribersViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribersViewUsecase {
  private notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;

  constructor({
    notificationSubscriberRepository,
  }: {
    notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;
  }) {
    this.notificationSubscriberRepository = notificationSubscriberRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribersViewSchema>) {
    // @ts-ignore
    const notificationSubscriber = await this.notificationSubscriberRepository.findOrThrow(data);
    return notificationSubscriber;
  }
}