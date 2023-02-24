import { PropertiesCreateUsecase } from '@core/application/usecases/crud-usecases/properties-create';
import { PropertiesDeleteUsecase } from '@core/application/usecases/crud-usecases/properties-delete';
import { PropertiesGetUsecase } from '@core/application/usecases/crud-usecases/properties-get';
import { PropertiesUpdateUsecase } from '@core/application/usecases/crud-usecases/properties-update';
import { PropertiesViewUsecase } from '@core/application/usecases/crud-usecases/properties-view';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
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
} from '../dtos/crud-dtos/properties.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('properties')
export class PropertiesCrudController {
  constructor(private repositoryImpl: PropertyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PropertiesGetDto) {
    const propertiesGetUsecase = new PropertiesGetUsecase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await propertiesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PropertiesViewDto) {
    const propertiesViewUsecase = new PropertiesViewUsecase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await propertiesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PropertiesCreateDto) {
    const propertiesCreateUsecase = new PropertiesCreateUsecase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await propertiesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PropertiesUpdateDto) {
    const propertiesUpdateUsecase = new PropertiesUpdateUsecase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await propertiesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PropertiesDeleteDto) {
    const propertiesDeleteUsecase = new PropertiesDeleteUsecase({
      propertyRepository: this.repositoryImpl,
    });

    const res = await propertiesDeleteUsecase.execute(body);

    return res;
  }
}


