import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { NotificationStrategiesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationStrategiesGetUsecase {
  private notificationStrategyRepository: NotificationStrategyRepositoryImpl;

  constructor({
    notificationStrategyRepository,
  }: {
    notificationStrategyRepository: NotificationStrategyRepositoryImpl;
  }) {
    this.notificationStrategyRepository = notificationStrategyRepository;
  }

  async execute(data: z.infer<typeof NotificationStrategiesGetSchema>) {
    // @ts-ignore
    const notificationStrategy = await this.notificationStrategyRepository.findAll();
    return notificationStrategy;
  }
}