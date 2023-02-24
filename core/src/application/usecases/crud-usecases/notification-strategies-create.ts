import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { NotificationStrategiesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationStrategiesCreateUsecase {
  private notificationStrategyRepository: NotificationStrategyRepositoryImpl;

  constructor({
    notificationStrategyRepository,
  }: {
    notificationStrategyRepository: NotificationStrategyRepositoryImpl;
  }) {
    this.notificationStrategyRepository = notificationStrategyRepository;
  }

  async execute(data: z.infer<typeof NotificationStrategiesCreateSchema>) {
    // @ts-ignore
    const notificationStrategy = await this.notificationStrategyRepository.createOrThrow(data, 'id');
    return notificationStrategy;
  }
}