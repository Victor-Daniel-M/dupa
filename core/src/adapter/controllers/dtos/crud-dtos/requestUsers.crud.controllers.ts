import { RequestUsersCreateUsecase } from '@core/application/usecases/crud-usecases/request-user-create';
import { RequestUsersDeleteUsecase } from '@core/application/usecases/crud-usecases/request-user-delete';
import { RequestUsersGetUsecase } from '@core/application/usecases/crud-usecases/request-user-get';
import { RequestUsersUpdateUsecase } from '@core/application/usecases/crud-usecases/request-user-update';
import { RequestUsersViewUsecase } from '@core/application/usecases/crud-usecases/request-user-view';
import { RequestUserRepositoryImpl } from '@core/infrastructure/repositories/request-user-repository';
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
  RequestUsersCreateDto,
  RequestUsersDeleteDto,
  RequestUsersGetDto,
  RequestUsersUpdateDto,
  RequestUsersViewDto,
} from '../dtos/requestUsers.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('request-user')
export class RequestUsersCrudController {
  constructor(private repositoryImpl: RequestUserRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: RequestUsersGetDto) {
    const requestUsersGetUsecase = new RequestUsersGetUsecase({
      requestUsersRepository: this.repositoryImpl,
    });

    const res = await requestUsersGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: RequestUsersViewDto) {
    const requestUsersViewUsecase = new RequestUsersViewUsecase({
      requestUsersRepository: this.repositoryImpl,
    });

    const res = await requestUsersViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: RequestUsersCreateDto) {
    const requestUsersCreateUsecase = new RequestUsersCreateUsecase({
      requestUsersRepository: this.repositoryImpl,
    });

    const res = await requestUsersCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: RequestUsersUpdateDto) {
    const requestUsersUpdateUsecase = new RequestUsersUpdateUsecase({
      requestUsersRepository: this.repositoryImpl,
    });

    const res = await requestUsersUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: RequestUsersDeleteDto) {
    const requestUsersDeleteUsecase = new RequestUsersDeleteUsecase({
      requestUsersRepository: this.repositoryImpl,
    });

    const res = await requestUsersDeleteUsecase.execute(body);

    return res;
  }
}


