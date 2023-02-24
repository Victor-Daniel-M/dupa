import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { NotificationSubscribablesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribables.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribablesDeleteUsecase {
  private notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;

  constructor({
    notificationSubscribableRepository,
  }: {
    notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;
  }) {
    this.notificationSubscribableRepository = notificationSubscribableRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribablesDeleteSchema>) {
    // @ts-ignore
    const notificationSubscribable = await this.notificationSubscribableRepository.delete(data.id!);
    return notificationSubscribable;
  }
}