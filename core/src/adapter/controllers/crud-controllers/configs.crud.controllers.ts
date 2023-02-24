import { ConfigsCreateUsecase } from '@core/application/usecases/crud-usecases/configs-create';
import { ConfigsDeleteUsecase } from '@core/application/usecases/crud-usecases/configs-delete';
import { ConfigsGetUsecase } from '@core/application/usecases/crud-usecases/configs-get';
import { ConfigsUpdateUsecase } from '@core/application/usecases/crud-usecases/configs-update';
import { ConfigsViewUsecase } from '@core/application/usecases/crud-usecases/configs-view';
import { ConfigRepositoryImpl } from '@core/infrastructure/repositories/configs-repository';
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
  ConfigsCreateDto,
  ConfigsDeleteDto,
  ConfigsGetDto,
  ConfigsUpdateDto,
  ConfigsViewDto,
} from '../dtos/crud-dtos/configs.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('configs')
export class ConfigsCrudController {
  constructor(private repositoryImpl: ConfigRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ConfigsGetDto) {
    const configsGetUsecase = new ConfigsGetUsecase({
      configRepository: this.repositoryImpl,
    });

    const res = await configsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ConfigsViewDto) {
    const configsViewUsecase = new ConfigsViewUsecase({
      configRepository: this.repositoryImpl,
    });

    const res = await configsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ConfigsCreateDto) {
    const configsCreateUsecase = new ConfigsCreateUsecase({
      configRepository: this.repositoryImpl,
    });

    const res = await configsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ConfigsUpdateDto) {
    const configsUpdateUsecase = new ConfigsUpdateUsecase({
      configRepository: this.repositoryImpl,
    });

    const res = await configsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ConfigsDeleteDto) {
    const configsDeleteUsecase = new ConfigsDeleteUsecase({
      configRepository: this.repositoryImpl,
    });

    const res = await configsDeleteUsecase.execute(body);

    return res;
  }
}


