import { OfferMetasCreateUsecase } from '@core/application/usecases/crud-usecases/offer-meta-create';
import { OfferMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/offer-meta-delete';
import { OfferMetasGetUsecase } from '@core/application/usecases/crud-usecases/offer-meta-get';
import { OfferMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/offer-meta-update';
import { OfferMetasViewUsecase } from '@core/application/usecases/crud-usecases/offer-meta-view';
import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-meta-repository';
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
  OfferMetasCreateDto,
  OfferMetasDeleteDto,
  OfferMetasGetDto,
  OfferMetasUpdateDto,
  OfferMetasViewDto,
} from '../dtos/offerMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('offer-meta')
export class OfferMetasCrudController {
  constructor(private repositoryImpl: OfferMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: OfferMetasGetDto) {
    const offerMetasGetUsecase = new OfferMetasGetUsecase({
      offerMetasRepository: this.repositoryImpl,
    });

    const res = await offerMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: OfferMetasViewDto) {
    const offerMetasViewUsecase = new OfferMetasViewUsecase({
      offerMetasRepository: this.repositoryImpl,
    });

    const res = await offerMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: OfferMetasCreateDto) {
    const offerMetasCreateUsecase = new OfferMetasCreateUsecase({
      offerMetasRepository: this.repositoryImpl,
    });

    const res = await offerMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: OfferMetasUpdateDto) {
    const offerMetasUpdateUsecase = new OfferMetasUpdateUsecase({
      offerMetasRepository: this.repositoryImpl,
    });

    const res = await offerMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: OfferMetasDeleteDto) {
    const offerMetasDeleteUsecase = new OfferMetasDeleteUsecase({
      offerMetasRepository: this.repositoryImpl,
    });

    const res = await offerMetasDeleteUsecase.execute(body);

    return res;
  }
}


