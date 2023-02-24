import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { NotificationSubscribablesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribables.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribablesGetUsecase {
  private notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;

  constructor({
    notificationSubscribableRepository,
  }: {
    notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;
  }) {
    this.notificationSubscribableRepository = notificationSubscribableRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribablesGetSchema>) {
    // @ts-ignore
    const notificationSubscribable = await this.notificationSubscribableRepository.findAll();
    return notificationSubscribable;
  }
}