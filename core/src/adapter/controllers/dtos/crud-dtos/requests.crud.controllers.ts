import { RequestsCreateUsecase } from '@core/application/usecases/crud-usecases/request-create';
import { RequestsDeleteUsecase } from '@core/application/usecases/crud-usecases/request-delete';
import { RequestsGetUsecase } from '@core/application/usecases/crud-usecases/request-get';
import { RequestsUpdateUsecase } from '@core/application/usecases/crud-usecases/request-update';
import { RequestsViewUsecase } from '@core/application/usecases/crud-usecases/request-view';
import { RequestRepositoryImpl } from '@core/infrastructure/repositories/request-repository';
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
  RequestsCreateDto,
  RequestsDeleteDto,
  RequestsGetDto,
  RequestsUpdateDto,
  RequestsViewDto,
} from '../dtos/requests.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('request')
export class RequestsCrudController {
  constructor(private repositoryImpl: RequestRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: RequestsGetDto) {
    const requestsGetUsecase = new RequestsGetUsecase({
      requestsRepository: this.repositoryImpl,
    });

    const res = await requestsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: RequestsViewDto) {
    const requestsViewUsecase = new RequestsViewUsecase({
      requestsRepository: this.repositoryImpl,
    });

    const res = await requestsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: RequestsCreateDto) {
    const requestsCreateUsecase = new RequestsCreateUsecase({
      requestsRepository: this.repositoryImpl,
    });

    const res = await requestsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: RequestsUpdateDto) {
    const requestsUpdateUsecase = new RequestsUpdateUsecase({
      requestsRepository: this.repositoryImpl,
    });

    const res = await requestsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: RequestsDeleteDto) {
    const requestsDeleteUsecase = new RequestsDeleteUsecase({
      requestsRepository: this.repositoryImpl,
    });

    const res = await requestsDeleteUsecase.execute(body);

    return res;
  }
}


