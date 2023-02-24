import { NotificationSubscribablesCreateUsecase } from '@core/application/usecases/crud-usecases/notification-subscribable-create';
import { NotificationSubscribablesDeleteUsecase } from '@core/application/usecases/crud-usecases/notification-subscribable-delete';
import { NotificationSubscribablesGetUsecase } from '@core/application/usecases/crud-usecases/notification-subscribable-get';
import { NotificationSubscribablesUpdateUsecase } from '@core/application/usecases/crud-usecases/notification-subscribable-update';
import { NotificationSubscribablesViewUsecase } from '@core/application/usecases/crud-usecases/notification-subscribable-view';
import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribable-repository';
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
  NotificationSubscribablesCreateDto,
  NotificationSubscribablesDeleteDto,
  NotificationSubscribablesGetDto,
  NotificationSubscribablesUpdateDto,
  NotificationSubscribablesViewDto,
} from '../dtos/notificationSubscribables.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('notification-subscribable')
export class NotificationSubscribablesCrudController {
  constructor(private repositoryImpl: NotificationSubscribableRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: NotificationSubscribablesGetDto) {
    const notificationSubscribablesGetUsecase = new NotificationSubscribablesGetUsecase({
      notificationSubscribablesRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: NotificationSubscribablesViewDto) {
    const notificationSubscribablesViewUsecase = new NotificationSubscribablesViewUsecase({
      notificationSubscribablesRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: NotificationSubscribablesCreateDto) {
    const notificationSubscribablesCreateUsecase = new NotificationSubscribablesCreateUsecase({
      notificationSubscribablesRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: NotificationSubscribablesUpdateDto) {
    const notificationSubscribablesUpdateUsecase = new NotificationSubscribablesUpdateUsecase({
      notificationSubscribablesRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: NotificationSubscribablesDeleteDto) {
    const notificationSubscribablesDeleteUsecase = new NotificationSubscribablesDeleteUsecase({
      notificationSubscribablesRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesDeleteUsecase.execute(body);

    return res;
  }
}


