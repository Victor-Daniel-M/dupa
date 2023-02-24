import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { NotificationSubscribablesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationSubscribables.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationSubscribablesCreateUsecase {
  private notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;

  constructor({
    notificationSubscribableRepository,
  }: {
    notificationSubscribableRepository: NotificationSubscribableRepositoryImpl;
  }) {
    this.notificationSubscribableRepository = notificationSubscribableRepository;
  }

  async execute(data: z.infer<typeof NotificationSubscribablesCreateSchema>) {
    // @ts-ignore
    const notificationSubscribable = await this.notificationSubscribableRepository.createOrThrow(data, 'id');
    return notificationSubscribable;
  }
}