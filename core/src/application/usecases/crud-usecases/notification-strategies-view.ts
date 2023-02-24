import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { NotificationStrategiesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationStrategiesViewUsecase {
  private notificationStrategyRepository: NotificationStrategyRepositoryImpl;

  constructor({
    notificationStrategyRepository,
  }: {
    notificationStrategyRepository: NotificationStrategyRepositoryImpl;
  }) {
    this.notificationStrategyRepository = notificationStrategyRepository;
  }

  async execute(data: z.infer<typeof NotificationStrategiesViewSchema>) {
    // @ts-ignore
    const notificationStrategy = await this.notificationStrategyRepository.findOrThrow(data);
    return notificationStrategy;
  }
}