import { ChargeTypesCreateUsecase } from '@core/application/usecases/crud-usecases/charge-types-create';
import { ChargeTypesDeleteUsecase } from '@core/application/usecases/crud-usecases/charge-types-delete';
import { ChargeTypesGetUsecase } from '@core/application/usecases/crud-usecases/charge-types-get';
import { ChargeTypesUpdateUsecase } from '@core/application/usecases/crud-usecases/charge-types-update';
import { ChargeTypesViewUsecase } from '@core/application/usecases/crud-usecases/charge-types-view';
import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
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
  ChargeTypesCreateDto,
  ChargeTypesDeleteDto,
  ChargeTypesGetDto,
  ChargeTypesUpdateDto,
  ChargeTypesViewDto,
} from '../dtos/crud-dtos/chargeTypes.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('charge-types')
export class ChargeTypesCrudController {
  constructor(private repositoryImpl: ChargeTypeRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ChargeTypesGetDto) {
    const chargeTypesGetUsecase = new ChargeTypesGetUsecase({
      chargeTypeRepository: this.repositoryImpl,
    });

    const res = await chargeTypesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ChargeTypesViewDto) {
    const chargeTypesViewUsecase = new ChargeTypesViewUsecase({
      chargeTypeRepository: this.repositoryImpl,
    });

    const res = await chargeTypesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ChargeTypesCreateDto) {
    const chargeTypesCreateUsecase = new ChargeTypesCreateUsecase({
      chargeTypeRepository: this.repositoryImpl,
    });

    const res = await chargeTypesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ChargeTypesUpdateDto) {
    const chargeTypesUpdateUsecase = new ChargeTypesUpdateUsecase({
      chargeTypeRepository: this.repositoryImpl,
    });

    const res = await chargeTypesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ChargeTypesDeleteDto) {
    const chargeTypesDeleteUsecase = new ChargeTypesDeleteUsecase({
      chargeTypeRepository: this.repositoryImpl,
    });

    const res = await chargeTypesDeleteUsecase.execute(body);

    return res;
  }
}


