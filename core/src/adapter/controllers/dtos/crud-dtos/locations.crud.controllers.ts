import { LocationsCreateUsecase } from '@core/application/usecases/crud-usecases/location-create';
import { LocationsDeleteUsecase } from '@core/application/usecases/crud-usecases/location-delete';
import { LocationsGetUsecase } from '@core/application/usecases/crud-usecases/location-get';
import { LocationsUpdateUsecase } from '@core/application/usecases/crud-usecases/location-update';
import { LocationsViewUsecase } from '@core/application/usecases/crud-usecases/location-view';
import { LocationRepositoryImpl } from '@core/infrastructure/repositories/location-repository';
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
  LocationsCreateDto,
  LocationsDeleteDto,
  LocationsGetDto,
  LocationsUpdateDto,
  LocationsViewDto,
} from '../dtos/locations.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('location')
export class LocationsCrudController {
  constructor(private repositoryImpl: LocationRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: LocationsGetDto) {
    const locationsGetUsecase = new LocationsGetUsecase({
      locationsRepository: this.repositoryImpl,
    });

    const res = await locationsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: LocationsViewDto) {
    const locationsViewUsecase = new LocationsViewUsecase({
      locationsRepository: this.repositoryImpl,
    });

    const res = await locationsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: LocationsCreateDto) {
    const locationsCreateUsecase = new LocationsCreateUsecase({
      locationsRepository: this.repositoryImpl,
    });

    const res = await locationsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: LocationsUpdateDto) {
    const locationsUpdateUsecase = new LocationsUpdateUsecase({
      locationsRepository: this.repositoryImpl,
    });

    const res = await locationsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: LocationsDeleteDto) {
    const locationsDeleteUsecase = new LocationsDeleteUsecase({
      locationsRepository: this.repositoryImpl,
    });

    const res = await locationsDeleteUsecase.execute(body);

    return res;
  }
}


