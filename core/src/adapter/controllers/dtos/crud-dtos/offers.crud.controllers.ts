import { OffersCreateUsecase } from '@core/application/usecases/crud-usecases/offer-create';
import { OffersDeleteUsecase } from '@core/application/usecases/crud-usecases/offer-delete';
import { OffersGetUsecase } from '@core/application/usecases/crud-usecases/offer-get';
import { OffersUpdateUsecase } from '@core/application/usecases/crud-usecases/offer-update';
import { OffersViewUsecase } from '@core/application/usecases/crud-usecases/offer-view';
import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offer-repository';
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
  OffersCreateDto,
  OffersDeleteDto,
  OffersGetDto,
  OffersUpdateDto,
  OffersViewDto,
} from '../dtos/offers.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('offer')
export class OffersCrudController {
  constructor(private repositoryImpl: OfferRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: OffersGetDto) {
    const offersGetUsecase = new OffersGetUsecase({
      offersRepository: this.repositoryImpl,
    });

    const res = await offersGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: OffersViewDto) {
    const offersViewUsecase = new OffersViewUsecase({
      offersRepository: this.repositoryImpl,
    });

    const res = await offersViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: OffersCreateDto) {
    const offersCreateUsecase = new OffersCreateUsecase({
      offersRepository: this.repositoryImpl,
    });

    const res = await offersCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: OffersUpdateDto) {
    const offersUpdateUsecase = new OffersUpdateUsecase({
      offersRepository: this.repositoryImpl,
    });

    const res = await offersUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: OffersDeleteDto) {
    const offersDeleteUsecase = new OffersDeleteUsecase({
      offersRepository: this.repositoryImpl,
    });

    const res = await offersDeleteUsecase.execute(body);

    return res;
  }
}


