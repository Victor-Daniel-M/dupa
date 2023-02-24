import { NotificationSubscribablesCreateUsecase } from '@core/application/usecases/crud-usecases/notification-subscribables-create';
import { NotificationSubscribablesDeleteUsecase } from '@core/application/usecases/crud-usecases/notification-subscribables-delete';
import { NotificationSubscribablesGetUsecase } from '@core/application/usecases/crud-usecases/notification-subscribables-get';
import { NotificationSubscribablesUpdateUsecase } from '@core/application/usecases/crud-usecases/notification-subscribables-update';
import { NotificationSubscribablesViewUsecase } from '@core/application/usecases/crud-usecases/notification-subscribables-view';
import { NotificationSubscribableRepositoryImpl } from '@core/infrastructure/repositories/notification-subscribables-repository';
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
} from '../dtos/crud-dtos/notificationSubscribables.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('notification-subscribables')
export class NotificationSubscribablesCrudController {
  constructor(private repositoryImpl: NotificationSubscribableRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: NotificationSubscribablesGetDto) {
    const notificationSubscribablesGetUsecase = new NotificationSubscribablesGetUsecase({
      notificationSubscribableRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: NotificationSubscribablesViewDto) {
    const notificationSubscribablesViewUsecase = new NotificationSubscribablesViewUsecase({
      notificationSubscribableRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: NotificationSubscribablesCreateDto) {
    const notificationSubscribablesCreateUsecase = new NotificationSubscribablesCreateUsecase({
      notificationSubscribableRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: NotificationSubscribablesUpdateDto) {
    const notificationSubscribablesUpdateUsecase = new NotificationSubscribablesUpdateUsecase({
      notificationSubscribableRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: NotificationSubscribablesDeleteDto) {
    const notificationSubscribablesDeleteUsecase = new NotificationSubscribablesDeleteUsecase({
      notificationSubscribableRepository: this.repositoryImpl,
    });

    const res = await notificationSubscribablesDeleteUsecase.execute(body);

    return res;
  }
}


