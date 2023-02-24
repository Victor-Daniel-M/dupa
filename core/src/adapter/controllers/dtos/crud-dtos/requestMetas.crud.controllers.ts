import { RequestMetasCreateUsecase } from '@core/application/usecases/crud-usecases/request-meta-create';
import { RequestMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/request-meta-delete';
import { RequestMetasGetUsecase } from '@core/application/usecases/crud-usecases/request-meta-get';
import { RequestMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/request-meta-update';
import { RequestMetasViewUsecase } from '@core/application/usecases/crud-usecases/request-meta-view';
import { RequestMetaRepositoryImpl } from '@core/infrastructure/repositories/request-meta-repository';
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
} from '../dtos/requestMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('request-meta')
export class RequestMetasCrudController {
  constructor(private repositoryImpl: RequestMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: RequestMetasGetDto) {
    const requestMetasGetUsecase = new RequestMetasGetUsecase({
      requestMetasRepository: this.repositoryImpl,
    });

    const res = await requestMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: RequestMetasViewDto) {
    const requestMetasViewUsecase = new RequestMetasViewUsecase({
      requestMetasRepository: this.repositoryImpl,
    });

    const res = await requestMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: RequestMetasCreateDto) {
    const requestMetasCreateUsecase = new RequestMetasCreateUsecase({
      requestMetasRepository: this.repositoryImpl,
    });

    const res = await requestMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: RequestMetasUpdateDto) {
    const requestMetasUpdateUsecase = new RequestMetasUpdateUsecase({
      requestMetasRepository: this.repositoryImpl,
    });

    const res = await requestMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: RequestMetasDeleteDto) {
    const requestMetasDeleteUsecase = new RequestMetasDeleteUsecase({
      requestMetasRepository: this.repositoryImpl,
    });

    const res = await requestMetasDeleteUsecase.execute(body);

    return res;
  }
}


