import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { NotificationStrategiesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/notificationStrategies.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class NotificationStrategiesDeleteUsecase {
  private notificationStrategyRepository: NotificationStrategyRepositoryImpl;

  constructor({
    notificationStrategyRepository,
  }: {
    notificationStrategyRepository: NotificationStrategyRepositoryImpl;
  }) {
    this.notificationStrategyRepository = notificationStrategyRepository;
  }

  async execute(data: z.infer<typeof NotificationStrategiesDeleteSchema>) {
    // @ts-ignore
    const notificationStrategy = await this.notificationStrategyRepository.delete(data.id!);
    return notificationStrategy;
  }
}