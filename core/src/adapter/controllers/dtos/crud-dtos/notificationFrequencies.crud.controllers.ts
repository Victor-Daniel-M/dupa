import { NotificationFrequenciesCreateUsecase } from '@core/application/usecases/crud-usecases/notification-frequency-create';
import { NotificationFrequenciesDeleteUsecase } from '@core/application/usecases/crud-usecases/notification-frequency-delete';
import { NotificationFrequenciesGetUsecase } from '@core/application/usecases/crud-usecases/notification-frequency-get';
import { NotificationFrequenciesUpdateUsecase } from '@core/application/usecases/crud-usecases/notification-frequency-update';
import { NotificationFrequenciesViewUsecase } from '@core/application/usecases/crud-usecases/notification-frequency-view';
import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequency-repository';
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
  NotificationFrequenciesCreateDto,
  NotificationFrequenciesDeleteDto,
  NotificationFrequenciesGetDto,
  NotificationFrequenciesUpdateDto,
  NotificationFrequenciesViewDto,
} from '../dtos/notificationFrequencies.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('notification-frequency')
export class NotificationFrequenciesCrudController {
  constructor(private repositoryImpl: NotificationFrequencyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: NotificationFrequenciesGetDto) {
    const notificationFrequenciesGetUsecase = new NotificationFrequenciesGetUsecase({
      notificationFrequenciesRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: NotificationFrequenciesViewDto) {
    const notificationFrequenciesViewUsecase = new NotificationFrequenciesViewUsecase({
      notificationFrequenciesRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: NotificationFrequenciesCreateDto) {
    const notificationFrequenciesCreateUsecase = new NotificationFrequenciesCreateUsecase({
      notificationFrequenciesRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: NotificationFrequenciesUpdateDto) {
    const notificationFrequenciesUpdateUsecase = new NotificationFrequenciesUpdateUsecase({
      notificationFrequenciesRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: NotificationFrequenciesDeleteDto) {
    const notificationFrequenciesDeleteUsecase = new NotificationFrequenciesDeleteUsecase({
      notificationFrequenciesRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesDeleteUsecase.execute(body);

    return res;
  }
}


