import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { NotificationSubscribablesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribables.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribablesUpdateUsecase {
  private notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;

  constructor({
    notificationSubscribableRepository,
  }: {
    notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;
  }) {
    this.notificationSubscribableRepository = notificationSubscribableRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribablesUpdateSchema>) {
    // @ts-ignore
    const notificationSubscribable = await this.notificationSubscribableRepository.update(data.id!, data);;
    return notificationSubscribable;
  }
}