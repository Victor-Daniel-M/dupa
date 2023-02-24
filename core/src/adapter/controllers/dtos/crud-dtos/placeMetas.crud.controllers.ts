import { PlaceMetasCreateUsecase } from '@core/application/usecases/crud-usecases/place-meta-create';
import { PlaceMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/place-meta-delete';
import { PlaceMetasGetUsecase } from '@core/application/usecases/crud-usecases/place-meta-get';
import { PlaceMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/place-meta-update';
import { PlaceMetasViewUsecase } from '@core/application/usecases/crud-usecases/place-meta-view';
import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-meta-repository';
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
  PlaceMetasCreateDto,
  PlaceMetasDeleteDto,
  PlaceMetasGetDto,
  PlaceMetasUpdateDto,
  PlaceMetasViewDto,
} from '../dtos/placeMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('place-meta')
export class PlaceMetasCrudController {
  constructor(private repositoryImpl: PlaceMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PlaceMetasGetDto) {
    const placeMetasGetUsecase = new PlaceMetasGetUsecase({
      placeMetasRepository: this.repositoryImpl,
    });

    const res = await placeMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PlaceMetasViewDto) {
    const placeMetasViewUsecase = new PlaceMetasViewUsecase({
      placeMetasRepository: this.repositoryImpl,
    });

    const res = await placeMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PlaceMetasCreateDto) {
    const placeMetasCreateUsecase = new PlaceMetasCreateUsecase({
      placeMetasRepository: this.repositoryImpl,
    });

    const res = await placeMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PlaceMetasUpdateDto) {
    const placeMetasUpdateUsecase = new PlaceMetasUpdateUsecase({
      placeMetasRepository: this.repositoryImpl,
    });

    const res = await placeMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PlaceMetasDeleteDto) {
    const placeMetasDeleteUsecase = new PlaceMetasDeleteUsecase({
      placeMetasRepository: this.repositoryImpl,
    });

    const res = await placeMetasDeleteUsecase.execute(body);

    return res;
  }
}


