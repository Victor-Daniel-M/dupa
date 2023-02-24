import { NotificationSubscribersCreateUsecase } from '@core/application/usecases/crud-usecases/notification-subscribers-create';
import { NotificationSubscribersDeleteUsecase } from '@core/application/usecases/crud-usecases/notification-subscribers-delete';
import { NotificationSubscribersGetUsecase } from '@core/application/usecases/crud-usecases/notification-subscribers-get';
import { NotificationSubscribersUpdateUsecase } from '@core/application/usecases/crud-usecases/notification-subscribers-update';
import { NotificationSubscribersViewUsecase } from '@core/application/usecases/crud-usecases/notification-subscribers-view';
import { NotificationSubscriberRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribers-repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  NotificationSubscribersCreateDto,
  NotificationSubscribersDeleteDto,
  NotificationSubscribersGetDto,
  NotificationSubscribersUpdateDto,
  NotificationSubscribersViewDto,
} from '../dtos/crud-dtos/notificationSubscribers.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('notification-subscribers')
export class NotificationSubscribersCrudController {
  constructor(private repositoryImpl: NotificationSubscriberRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: NotificationSubscribersGetDto) {
    const notificationSubscribersGetUsecase = new NotificationSubscribersGetUsecase({
      notificationSubscriberRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribersGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: NotificationSubscribersViewDto) {
    const notificationSubscribersViewUsecase = new NotificationSubscribersViewUsecase({
      notificationSubscriberRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribersViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: NotificationSubscribersCreateDto) {
    const notificationSubscribersCreateUsecase = new NotificationSubscribersCreateUsecase({
      notificationSubscriberRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribersCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: NotificationSubscribersUpdateDto) {
    const notificationSubscribersUpdateUsecase = new NotificationSubscribersUpdateUsecase({
      notificationSubscriberRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribersUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: NotificationSubscribersDeleteDto) {
    const notificationSubscribersDeleteUsecase = new NotificationSubscribersDeleteUsecase({
      notificationSubscriberRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribersDeleteUsecase.execute(body);

    return res;
  }
}


