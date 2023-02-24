import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { NotificationSubscribablesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribables.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribablesViewUsecase {
  private notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;

  constructor({
    notificationSubscribableRepository,
  }: {
    notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;
  }) {
    this.notificationSubscribableRepository = notificationSubscribableRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribablesViewSchema>) {
    // @ts-ignore
    const notificationSubscribable = await this.notificationSubscribableRepository.findOrThrow(data);
    return notificationSubscribable;
  }
}