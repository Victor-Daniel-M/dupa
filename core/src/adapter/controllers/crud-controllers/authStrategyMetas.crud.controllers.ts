import { AuthStrategyMetasCreateUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-metas-create';
import { AuthStrategyMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-metas-delete';
import { AuthStrategyMetasGetUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-metas-get';
import { AuthStrategyMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-metas-update';
import { AuthStrategyMetasViewUsecase } from '@core/application/usecases/crud-usecases/auth-strategy-metas-view';
import { AuthStrategyMetaRepositoryImpl } from '@core/infrastructure/repositories/auth-strategy-metas-repository';
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
  AuthStrategyMetasCreateDto,
  AuthStrategyMetasDeleteDto,
  AuthStrategyMetasGetDto,
  AuthStrategyMetasUpdateDto,
  AuthStrategyMetasViewDto,
} from '../dtos/crud-dtos/authStrategyMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('auth-strategy-metas')
export class AuthStrategyMetasCrudController {
  constructor(private repositoryImpl: AuthStrategyMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: AuthStrategyMetasGetDto) {
    const authStrategyMetasGetUsecase = new AuthStrategyMetasGetUsecase({
      authStrategyMetaRepository: this.repositoryImpl,
    });

    const res = await authStrategyMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: AuthStrategyMetasViewDto) {
    const authStrategyMetasViewUsecase = new AuthStrategyMetasViewUsecase({
      authStrategyMetaRepository: this.repositoryImpl,
    });

    const res = await authStrategyMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: AuthStrategyMetasCreateDto) {
    const authStrategyMetasCreateUsecase = new AuthStrategyMetasCreateUsecase({
      authStrategyMetaRepository: this.repositoryImpl,
    });

    const res = await authStrategyMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: AuthStrategyMetasUpdateDto) {
    const authStrategyMetasUpdateUsecase = new AuthStrategyMetasUpdateUsecase({
      authStrategyMetaRepository: this.repositoryImpl,
    });

    const res = await authStrategyMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: AuthStrategyMetasDeleteDto) {
    const authStrategyMetasDeleteUsecase = new AuthStrategyMetasDeleteUsecase({
      authStrategyMetaRepository: this.repositoryImpl,
    });

    const res = await authStrategyMetasDeleteUsecase.execute(body);

    return res;
  }
}


