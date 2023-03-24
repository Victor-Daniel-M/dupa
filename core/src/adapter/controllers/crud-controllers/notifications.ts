import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategies-repository';
import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import { BaseController } from 'base/base.controller';
import {
  NotificationFrequency,
  NotificationStrategy,
  NotificationSubscribable,
  NotificationSubscriber,
} from '@core/domain/entities/notification';

@ApiTags('notification-frequencies')
@Controller('notification-frequencies')
export class NotificationFrequenciesController extends BaseController<NotificationFrequency> {
  constructor(
    private readonly notificationFrequencyRepository: NotificationFrequencyRepositoryImpl,
  ) {
    super(notificationFrequencyRepository);
  }
}

@ApiTags('notification-strategies')
@Controller('notification-strategies')
export class NotificationStrategiesController extends BaseController<NotificationStrategy> {
  constructor(
    private readonly notificationStrategyRepository: NotificationStrategyRepositoryImpl,
  ) {
    super(notificationStrategyRepository);
  }
}

@ApiTags('notification-subscribers')
@Controller('notification-subscribers')
export class NotificationSubscribersController extends BaseController<NotificationSubscriber> {
  constructor(
    private readonly notificationSubscriberRepository: NotificationSubscriberRepositoryImpl,
  ) {
    super(notificationSubscriberRepository);
  }
}

@ApiTags('notification-subscribables')
@Controller('notification-subscribables')
export class NotificationSubscribablesController extends BaseController<NotificationSubscribable> {
  constructor(
    private readonly notificationSubscribableRepository: NotificationSubscribableRepositoryImpl,
  ) {
    super(notificationSubscribableRepository);
  }
}
