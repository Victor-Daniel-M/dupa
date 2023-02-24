import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { NotificationSubscribersCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribersCreateUsecase {
  private notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;

  constructor({
    notificationSubscriberRepository,
  }: {
    notificationSubscriberRepository: NotificationSubscriberRepositoryImpl;
  }) {
    this.notificationSubscriberRepository = notificationSubscriberRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribersCreateSchema>) {
    // @ts-ignore
    const notificationSubscriber = await this.notificationSubscriberRepository.createOrThrow(data, 'id');
    return notificationSubscriber;
  }
}