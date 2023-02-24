import { RequestMetasCreateUsecase } from '@core/application/usecases/crud-usecases/request-metas-create';
import { RequestMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/request-metas-delete';
import { RequestMetasGetUsecase } from '@core/application/usecases/crud-usecases/request-metas-get';
import { RequestMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/request-metas-update';
import { RequestMetasViewUsecase } from '@core/application/usecases/crud-usecases/request-metas-view';
import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-metas-repository';
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
  RequestMetasCreateDto,
  RequestMetasDeleteDto,
  RequestMetasGetDto,
  RequestMetasUpdateDto,
  RequestMetasViewDto,
} from '../dtos/crud-dtos/requestMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('request-metas')
export class RequestMetasCrudController {
  constructor(private repositoryImpl: RequestMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: RequestMetasGetDto) {
    const requestMetasGetUsecase = new RequestMetasGetUsecase({
      requestMetaRepository: this.repositoryImpl,
    });

    const res = await requestMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: RequestMetasViewDto) {
    const requestMetasViewUsecase = new RequestMetasViewUsecase({
      requestMetaRepository: this.repositoryImpl,
    });

    const res = await requestMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: RequestMetasCreateDto) {
    const requestMetasCreateUsecase = new RequestMetasCreateUsecase({
      requestMetaRepository: this.repositoryImpl,
    });

    const res = await requestMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: RequestMetasUpdateDto) {
    const requestMetasUpdateUsecase = new RequestMetasUpdateUsecase({
      requestMetaRepository: this.repositoryImpl,
    });

    const res = await requestMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: RequestMetasDeleteDto) {
    const requestMetasDeleteUsecase = new RequestMetasDeleteUsecase({
      requestMetaRepository: this.repositoryImpl,
    });

    const res = await requestMetasDeleteUsecase.execute(body);

    return res;
  }
}


