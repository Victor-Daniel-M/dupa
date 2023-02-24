import { PropertiesCreateUsecase } from '@core/application/usecases/crud-usecases/property-create';
import { PropertiesDeleteUsecase } from '@core/application/usecases/crud-usecases/property-delete';
import { PropertiesGetUsecase } from '@core/application/usecases/crud-usecases/property-get';
import { PropertiesUpdateUsecase } from '@core/application/usecases/crud-usecases/property-update';
import { PropertiesViewUsecase } from '@core/application/usecases/crud-usecases/property-view';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/property-repository';
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
  PropertiesCreateDto,
  PropertiesDeleteDto,
  PropertiesGetDto,
  PropertiesUpdateDto,
  PropertiesViewDto,
} from '../dtos/properties.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('property')
export class PropertiesCrudController {
  constructor(private repositoryImpl: PropertyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PropertiesGetDto) {
    const propertiesGetUsecase = new PropertiesGetUsecase({
      propertiesRepository: this.repositoryImpl,
    });

    const res = await propertiesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PropertiesViewDto) {
    const propertiesViewUsecase = new PropertiesViewUsecase({
      propertiesRepository: this.repositoryImpl,
    });

    const res = await propertiesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PropertiesCreateDto) {
    const propertiesCreateUsecase = new PropertiesCreateUsecase({
      propertiesRepository: this.repositoryImpl,
    });

    const res = await propertiesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PropertiesUpdateDto) {
    const propertiesUpdateUsecase = new PropertiesUpdateUsecase({
      propertiesRepository: this.repositoryImpl,
    });

    const res = await propertiesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PropertiesDeleteDto) {
    const propertiesDeleteUsecase = new PropertiesDeleteUsecase({
      propertiesRepository: this.repositoryImpl,
    });

    const res = await propertiesDeleteUsecase.execute(body);

    return res;
  }
}


