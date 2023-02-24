import { RequestsCreateUsecase } from '@core/application/usecases/crud-usecases/requests-create';
import { RequestsDeleteUsecase } from '@core/application/usecases/crud-usecases/requests-delete';
import { RequestsGetUsecase } from '@core/application/usecases/crud-usecases/requests-get';
import { RequestsUpdateUsecase } from '@core/application/usecases/crud-usecases/requests-update';
import { RequestsViewUsecase } from '@core/application/usecases/crud-usecases/requests-view';
import { RequestRepositoryImpl } from '@core/infrastructure/repositories/requests-repository';
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
} from '../dtos/crud-dtos/requests.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('requests')
export class RequestsCrudController {
  constructor(private repositoryImpl: RequestRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: RequestsGetDto) {
    const requestsGetUsecase = new RequestsGetUsecase({
      requestRepository: this.repositoryImpl,
    });

    const res = await requestsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: RequestsViewDto) {
    const requestsViewUsecase = new RequestsViewUsecase({
      requestRepository: this.repositoryImpl,
    });

    const res = await requestsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: RequestsCreateDto) {
    const requestsCreateUsecase = new RequestsCreateUsecase({
      requestRepository: this.repositoryImpl,
    });

    const res = await requestsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: RequestsUpdateDto) {
    const requestsUpdateUsecase = new RequestsUpdateUsecase({
      requestRepository: this.repositoryImpl,
    });

    const res = await requestsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: RequestsDeleteDto) {
    const requestsDeleteUsecase = new RequestsDeleteUsecase({
      requestRepository: this.repositoryImpl,
    });

    const res = await requestsDeleteUsecase.execute(body);

    return res;
  }
}


