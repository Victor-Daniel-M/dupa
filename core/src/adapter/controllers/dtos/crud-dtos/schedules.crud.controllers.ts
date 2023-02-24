import { SchedulesCreateUsecase } from '@core/application/usecases/crud-usecases/schedule-create';
import { SchedulesDeleteUsecase } from '@core/application/usecases/crud-usecases/schedule-delete';
import { SchedulesGetUsecase } from '@core/application/usecases/crud-usecases/schedule-get';
import { SchedulesUpdateUsecase } from '@core/application/usecases/crud-usecases/schedule-update';
import { SchedulesViewUsecase } from '@core/application/usecases/crud-usecases/schedule-view';
import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedule-repository';
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
  SchedulesCreateDto,
  SchedulesDeleteDto,
  SchedulesGetDto,
  SchedulesUpdateDto,
  SchedulesViewDto,
} from '../dtos/schedules.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('schedule')
export class SchedulesCrudController {
  constructor(private repositoryImpl: ScheduleRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: SchedulesGetDto) {
    const schedulesGetUsecase = new SchedulesGetUsecase({
      schedulesRepository: this.repositoryImpl,
    });

    const res = await schedulesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: SchedulesViewDto) {
    const schedulesViewUsecase = new SchedulesViewUsecase({
      schedulesRepository: this.repositoryImpl,
    });

    const res = await schedulesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: SchedulesCreateDto) {
    const schedulesCreateUsecase = new SchedulesCreateUsecase({
      schedulesRepository: this.repositoryImpl,
    });

    const res = await schedulesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: SchedulesUpdateDto) {
    const schedulesUpdateUsecase = new SchedulesUpdateUsecase({
      schedulesRepository: this.repositoryImpl,
    });

    const res = await schedulesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: SchedulesDeleteDto) {
    const schedulesDeleteUsecase = new SchedulesDeleteUsecase({
      schedulesRepository: this.repositoryImpl,
    });

    const res = await schedulesDeleteUsecase.execute(body);

    return res;
  }
}


