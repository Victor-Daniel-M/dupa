import { AuthStrategiesCreateUsecase } from '@core/application/usecases/crud-usecases/auth-strategies-create';
import { AuthStrategiesDeleteUsecase } from '@core/application/usecases/crud-usecases/auth-strategies-delete';
import { AuthStrategiesGetUsecase } from '@core/application/usecases/crud-usecases/auth-strategies-get';
import { AuthStrategiesUpdateUsecase } from '@core/application/usecases/crud-usecases/auth-strategies-update';
import { AuthStrategiesViewUsecase } from '@core/application/usecases/crud-usecases/auth-strategies-view';
import { AuthStrategyRepositoryImpl } from '@core/infrastructure/repositories/auth-strategies-repository';
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
} from '../dtos/crud-dtos/authStrategies.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('auth-strategies')
export class AuthStrategiesCrudController {
  constructor(private repositoryImpl: AuthStrategyRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: AuthStrategiesGetDto) {
    const authStrategiesGetUsecase = new AuthStrategiesGetUsecase({
      authStrategyRepository: this.repositoryImpl,
    });

    const res = await authStrategiesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: AuthStrategiesViewDto) {
    const authStrategiesViewUsecase = new AuthStrategiesViewUsecase({
      authStrategyRepository: this.repositoryImpl,
    });

    const res = await authStrategiesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: AuthStrategiesCreateDto) {
    const authStrategiesCreateUsecase = new AuthStrategiesCreateUsecase({
      authStrategyRepository: this.repositoryImpl,
    });

    const res = await authStrategiesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: AuthStrategiesUpdateDto) {
    const authStrategiesUpdateUsecase = new AuthStrategiesUpdateUsecase({
      authStrategyRepository: this.repositoryImpl,
    });

    const res = await authStrategiesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: AuthStrategiesDeleteDto) {
    const authStrategiesDeleteUsecase = new AuthStrategiesDeleteUsecase({
      authStrategyRepository: this.repositoryImpl,
    });

    const res = await authStrategiesDeleteUsecase.execute(body);

    return res;
  }
}


