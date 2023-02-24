import { PlacesCreateUsecase } from '@core/application/usecases/crud-usecases/places-create';
import { PlacesDeleteUsecase } from '@core/application/usecases/crud-usecases/places-delete';
import { PlacesGetUsecase } from '@core/application/usecases/crud-usecases/places-get';
import { PlacesUpdateUsecase } from '@core/application/usecases/crud-usecases/places-update';
import { PlacesViewUsecase } from '@core/application/usecases/crud-usecases/places-view';
import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
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
} from '../dtos/crud-dtos/places.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('places')
export class PlacesCrudController {
  constructor(private repositoryImpl: PlaceRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PlacesGetDto) {
    const placesGetUsecase = new PlacesGetUsecase({
      placeRepository: this.repositoryImpl,
    });

    const res = await placesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PlacesViewDto) {
    const placesViewUsecase = new PlacesViewUsecase({
      placeRepository: this.repositoryImpl,
    });

    const res = await placesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PlacesCreateDto) {
    const placesCreateUsecase = new PlacesCreateUsecase({
      placeRepository: this.repositoryImpl,
    });

    const res = await placesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PlacesUpdateDto) {
    const placesUpdateUsecase = new PlacesUpdateUsecase({
      placeRepository: this.repositoryImpl,
    });

    const res = await placesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PlacesDeleteDto) {
    const placesDeleteUsecase = new PlacesDeleteUsecase({
      placeRepository: this.repositoryImpl,
    });

    const res = await placesDeleteUsecase.execute(body);

    return res;
  }
}


