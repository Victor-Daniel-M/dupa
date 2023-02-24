import { PlacesCreateUsecase } from '@core/application/usecases/crud-usecases/place-create';
import { PlacesDeleteUsecase } from '@core/application/usecases/crud-usecases/place-delete';
import { PlacesGetUsecase } from '@core/application/usecases/crud-usecases/place-get';
import { PlacesUpdateUsecase } from '@core/application/usecases/crud-usecases/place-update';
import { PlacesViewUsecase } from '@core/application/usecases/crud-usecases/place-view';
import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/place-repository';
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
  PlacesCreateDto,
  PlacesDeleteDto,
  PlacesGetDto,
  PlacesUpdateDto,
  PlacesViewDto,
} from '../dtos/places.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('place')
export class PlacesCrudController {
  constructor(private repositoryImpl: PlaceRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PlacesGetDto) {
    const placesGetUsecase = new PlacesGetUsecase({
      placesRepository: this.repositoryImpl,
    });

    const res = await placesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PlacesViewDto) {
    const placesViewUsecase = new PlacesViewUsecase({
      placesRepository: this.repositoryImpl,
    });

    const res = await placesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PlacesCreateDto) {
    const placesCreateUsecase = new PlacesCreateUsecase({
      placesRepository: this.repositoryImpl,
    });

    const res = await placesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PlacesUpdateDto) {
    const placesUpdateUsecase = new PlacesUpdateUsecase({
      placesRepository: this.repositoryImpl,
    });

    const res = await placesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PlacesDeleteDto) {
    const placesDeleteUsecase = new PlacesDeleteUsecase({
      placesRepository: this.repositoryImpl,
    });

    const res = await placesDeleteUsecase.execute(body);

    return res;
  }
}


