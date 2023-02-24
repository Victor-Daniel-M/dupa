import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { NotificationSubscribersUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribersUpdateUsecase {
  private notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;

  constructor({
    notificationSubscriberRepository,
  }: {
    notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;
  }) {
    this.notificationSubscriberRepository = notificationSubscriberRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribersUpdateSchema>) {
    // @ts-ignore
    const notificationSubscriber = await this.notificationSubscriberRepository.update(data.id!, data);;
    return notificationSubscriber;
  }
}