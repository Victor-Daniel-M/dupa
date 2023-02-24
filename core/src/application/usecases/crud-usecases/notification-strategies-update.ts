import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { NotificationStrategiesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationStrategiesUpdateUsecase {
  private notificationStrategyRepository: NotificationStrategyRepositoryImpl;

  constructor({
    notificationStrategyRepository,
  }: {
    notificationStrategyRepository: NotificationStrategyRepositoryImpl;
  }) {
    this.notificationStrategyRepository = notificationStrategyRepository;
  }

  async execute(data: z.infer<typeof NotificationStrategiesUpdateSchema>) {
    // @ts-ignore
    const notificationStrategy = await this.notificationStrategyRepository.update(data.id!, data);;
    return notificationStrategy;
  }
}