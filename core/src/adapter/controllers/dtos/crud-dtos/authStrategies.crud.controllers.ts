import { AuthStrategiesCreateUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-create';
import { AuthStrategiesDeleteUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-delete';
import { AuthStrategiesGetUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-get';
import { AuthStrategiesUpdateUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-update';
import { AuthStrategiesViewUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-view';
import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-repository';
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
  AuthStrategiesCreateDto,
  AuthStrategiesDeleteDto,
  AuthStrategiesGetDto,
  AuthStrategiesUpdateDto,
  AuthStrategiesViewDto,
} from '../dtos/authStrategies.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('auth-strategy')
export class AuthStrategiesCrudController {
  constructor(private repositoryImpl: AuthStrategyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: AuthStrategiesGetDto) {
    const authStrategiesGetUsecase = new AuthStrategiesGetUsecase({
      authStrategiesRepository: this.repositoryImpl,
    });

    const res = await authStrategiesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: AuthStrategiesViewDto) {
    const authStrategiesViewUsecase = new AuthStrategiesViewUsecase({
      authStrategiesRepository: this.repositoryImpl,
    });

    const res = await authStrategiesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: AuthStrategiesCreateDto) {
    const authStrategiesCreateUsecase = new AuthStrategiesCreateUsecase({
      authStrategiesRepository: this.repositoryImpl,
    });

    const res = await authStrategiesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: AuthStrategiesUpdateDto) {
    const authStrategiesUpdateUsecase = new AuthStrategiesUpdateUsecase({
      authStrategiesRepository: this.repositoryImpl,
    });

    const res = await authStrategiesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: AuthStrategiesDeleteDto) {
    const authStrategiesDeleteUsecase = new AuthStrategiesDeleteUsecase({
      authStrategiesRepository: this.repositoryImpl,
    });

    const res = await authStrategiesDeleteUsecase.execute(body);

    return res;
  }
}


