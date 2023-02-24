import { SchedulesCreateUsecase } from '@core/application/usecases/crud-usecases/schedules-create';
import { SchedulesDeleteUsecase } from '@core/application/usecases/crud-usecases/schedules-delete';
import { SchedulesGetUsecase } from '@core/application/usecases/crud-usecases/schedules-get';
import { SchedulesUpdateUsecase } from '@core/application/usecases/crud-usecases/schedules-update';
import { SchedulesViewUsecase } from '@core/application/usecases/crud-usecases/schedules-view';
import { ScheduleRepositoryImpl } from '@core/infrastructure/repositories/schedules-repository';
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
} from '../dtos/crud-dtos/schedules.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('schedules')
export class SchedulesCrudController {
  constructor(private repositoryImpl: ScheduleRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: SchedulesGetDto) {
    const schedulesGetUsecase = new SchedulesGetUsecase({
      scheduleRepository: this.repositoryImpl,
    });

    const res = await schedulesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: SchedulesViewDto) {
    const schedulesViewUsecase = new SchedulesViewUsecase({
      scheduleRepository: this.repositoryImpl,
    });

    const res = await schedulesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: SchedulesCreateDto) {
    const schedulesCreateUsecase = new SchedulesCreateUsecase({
      scheduleRepository: this.repositoryImpl,
    });

    const res = await schedulesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: SchedulesUpdateDto) {
    const schedulesUpdateUsecase = new SchedulesUpdateUsecase({
      scheduleRepository: this.repositoryImpl,
    });

    const res = await schedulesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: SchedulesDeleteDto) {
    const schedulesDeleteUsecase = new SchedulesDeleteUsecase({
      scheduleRepository: this.repositoryImpl,
    });

    const res = await schedulesDeleteUsecase.execute(body);

    return res;
  }
}


