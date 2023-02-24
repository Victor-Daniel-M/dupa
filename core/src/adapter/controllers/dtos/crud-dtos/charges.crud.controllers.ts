import { ChargesCreateUsecase } from '@core/application/usecases/crud-usecases/charge-create';
import { ChargesDeleteUsecase } from '@core/application/usecases/crud-usecases/charge-delete';
import { ChargesGetUsecase } from '@core/application/usecases/crud-usecases/charge-get';
import { ChargesUpdateUsecase } from '@core/application/usecases/crud-usecases/charge-update';
import { ChargesViewUsecase } from '@core/application/usecases/crud-usecases/charge-view';
import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charge-repository';
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
  ChargesCreateDto,
  ChargesDeleteDto,
  ChargesGetDto,
  ChargesUpdateDto,
  ChargesViewDto,
} from '../dtos/charges.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('charge')
export class ChargesCrudController {
  constructor(private repositoryImpl: ChargeRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ChargesGetDto) {
    const chargesGetUsecase = new ChargesGetUsecase({
      chargesRepository: this.repositoryImpl,
    });

    const res = await chargesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ChargesViewDto) {
    const chargesViewUsecase = new ChargesViewUsecase({
      chargesRepository: this.repositoryImpl,
    });

    const res = await chargesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ChargesCreateDto) {
    const chargesCreateUsecase = new ChargesCreateUsecase({
      chargesRepository: this.repositoryImpl,
    });

    const res = await chargesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ChargesUpdateDto) {
    const chargesUpdateUsecase = new ChargesUpdateUsecase({
      chargesRepository: this.repositoryImpl,
    });

    const res = await chargesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ChargesDeleteDto) {
    const chargesDeleteUsecase = new ChargesDeleteUsecase({
      chargesRepository: this.repositoryImpl,
    });

    const res = await chargesDeleteUsecase.execute(body);

    return res;
  }
}


