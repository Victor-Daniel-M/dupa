import { NotificationStrategiesCreateUsecase } from '@core/application/usecases/crud-usecases/notification-strategy-create';
import { NotificationStrategiesDeleteUsecase } from '@core/application/usecases/crud-usecases/notification-strategy-delete';
import { NotificationStrategiesGetUsecase } from '@core/application/usecases/crud-usecases/notification-strategy-get';
import { NotificationStrategiesUpdateUsecase } from '@core/application/usecases/crud-usecases/notification-strategy-update';
import { NotificationStrategiesViewUsecase } from '@core/application/usecases/crud-usecases/notification-strategy-view';
import { NotificationStrategyRepositoryImpl } from '@core/infrastructure/repositories/notification-strategy-repository';
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
  NotificationStrategiesCreateDto,
  NotificationStrategiesDeleteDto,
  NotificationStrategiesGetDto,
  NotificationStrategiesUpdateDto,
  NotificationStrategiesViewDto,
} from '../dtos/notificationStrategies.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('notification-strategy')
export class NotificationStrategiesCrudController {
  constructor(private repositoryImpl: NotificationStrategyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: NotificationStrategiesGetDto) {
    const notificationStrategiesGetUsecase = new NotificationStrategiesGetUsecase({
      notificationStrategiesRepository: this.repositoryImpl,
    });

    const res = await notificationStrategiesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: NotificationStrategiesViewDto) {
    const notificationStrategiesViewUsecase = new NotificationStrategiesViewUsecase({
      notificationStrategiesRepository: this.repositoryImpl,
    });

    const res = await notificationStrategiesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: NotificationStrategiesCreateDto) {
    const notificationStrategiesCreateUsecase = new NotificationStrategiesCreateUsecase({
      notificationStrategiesRepository: this.repositoryImpl,
    });

    const res = await notificationStrategiesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: NotificationStrategiesUpdateDto) {
    const notificationStrategiesUpdateUsecase = new NotificationStrategiesUpdateUsecase({
      notificationStrategiesRepository: this.repositoryImpl,
    });

    const res = await notificationStrategiesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: NotificationStrategiesDeleteDto) {
    const notificationStrategiesDeleteUsecase = new NotificationStrategiesDeleteUsecase({
      notificationStrategiesRepository: this.repositoryImpl,
    });

    const res = await notificationStrategiesDeleteUsecase.execute(body);

    return res;
  }
}


