import { PropertyMetasCreateUsecase } from '@core/application/usecases/crud-usecases/property-metas-create';
import { PropertyMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/property-metas-delete';
import { PropertyMetasGetUsecase } from '@core/application/usecases/crud-usecases/property-metas-get';
import { PropertyMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/property-metas-update';
import { PropertyMetasViewUsecase } from '@core/application/usecases/crud-usecases/property-metas-view';
import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
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
  PropertyMetasCreateDto,
  PropertyMetasDeleteDto,
  PropertyMetasGetDto,
  PropertyMetasUpdateDto,
  PropertyMetasViewDto,
} from '../dtos/crud-dtos/propertyMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('property-metas')
export class PropertyMetasCrudController {
  constructor(private repositoryImpl: PropertyMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PropertyMetasGetDto) {
    const propertyMetasGetUsecase = new PropertyMetasGetUsecase({
      propertyMetaRepository: this.repositoryImpl,
    });

    const res = await propertyMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PropertyMetasViewDto) {
    const propertyMetasViewUsecase = new PropertyMetasViewUsecase({
      propertyMetaRepository: this.repositoryImpl,
    });

    const res = await propertyMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PropertyMetasCreateDto) {
    const propertyMetasCreateUsecase = new PropertyMetasCreateUsecase({
      propertyMetaRepository: this.repositoryImpl,
    });

    const res = await propertyMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PropertyMetasUpdateDto) {
    const propertyMetasUpdateUsecase = new PropertyMetasUpdateUsecase({
      propertyMetaRepository: this.repositoryImpl,
    });

    const res = await propertyMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PropertyMetasDeleteDto) {
    const propertyMetasDeleteUsecase = new PropertyMetasDeleteUsecase({
      propertyMetaRepository: this.repositoryImpl,
    });

    const res = await propertyMetasDeleteUsecase.execute(body);

    return res;
  }
}


