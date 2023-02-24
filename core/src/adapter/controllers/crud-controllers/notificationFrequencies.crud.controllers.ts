import { NotificationFrequenciesCreateUsecase } from '@core/application/usecases/crud-usecases/notification-frequencies-create';
import { NotificationFrequenciesDeleteUsecase } from '@core/application/usecases/crud-usecases/notification-frequencies-delete';
import { NotificationFrequenciesGetUsecase } from '@core/application/usecases/crud-usecases/notification-frequencies-get';
import { NotificationFrequenciesUpdateUsecase } from '@core/application/usecases/crud-usecases/notification-frequencies-update';
import { NotificationFrequenciesViewUsecase } from '@core/application/usecases/crud-usecases/notification-frequencies-view';
import { NotificationFrequencyRepositoryImpl } from '@core/infrastructure/repositories/notification-frequencies-repository';
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
} from '../dtos/crud-dtos/notificationFrequencies.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('notification-frequencies')
export class NotificationFrequenciesCrudController {
  constructor(private repositoryImpl: NotificationFrequencyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: NotificationFrequenciesGetDto) {
    const notificationFrequenciesGetUsecase = new NotificationFrequenciesGetUsecase({
      notificationFrequencyRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: NotificationFrequenciesViewDto) {
    const notificationFrequenciesViewUsecase = new NotificationFrequenciesViewUsecase({
      notificationFrequencyRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: NotificationFrequenciesCreateDto) {
    const notificationFrequenciesCreateUsecase = new NotificationFrequenciesCreateUsecase({
      notificationFrequencyRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: NotificationFrequenciesUpdateDto) {
    const notificationFrequenciesUpdateUsecase = new NotificationFrequenciesUpdateUsecase({
      notificationFrequencyRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: NotificationFrequenciesDeleteDto) {
    const notificationFrequenciesDeleteUsecase = new NotificationFrequenciesDeleteUsecase({
      notificationFrequencyRepository: this.repositoryImpl,
    });

    const res = await notificationFrequenciesDeleteUsecase.execute(body);

    return res;
  }
}


