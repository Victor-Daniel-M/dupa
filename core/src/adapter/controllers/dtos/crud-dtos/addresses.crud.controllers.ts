import { AddressesCreateUsecase } from '@core/application/usecases/crud-usecases/address-create';
import { AddressesDeleteUsecase } from '@core/application/usecases/crud-usecases/address-delete';
import { AddressesGetUsecase } from '@core/application/usecases/crud-usecases/address-get';
import { AddressesUpdateUsecase } from '@core/application/usecases/crud-usecases/address-update';
import { AddressesViewUsecase } from '@core/application/usecases/crud-usecases/address-view';
import { AddressRepositoryImpl } from '@core/infrastructure/repositories/address-repository';
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
  AddressesCreateDto,
  AddressesDeleteDto,
  AddressesGetDto,
  AddressesUpdateDto,
  AddressesViewDto,
} from '../dtos/addresses.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('address')
export class AddressesCrudController {
  constructor(private repositoryImpl: AddressRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: AddressesGetDto) {
    const addressesGetUsecase = new AddressesGetUsecase({
      addressesRepository: this.repositoryImpl,
    });

    const res = await addressesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: AddressesViewDto) {
    const addressesViewUsecase = new AddressesViewUsecase({
      addressesRepository: this.repositoryImpl,
    });

    const res = await addressesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: AddressesCreateDto) {
    const addressesCreateUsecase = new AddressesCreateUsecase({
      addressesRepository: this.repositoryImpl,
    });

    const res = await addressesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: AddressesUpdateDto) {
    const addressesUpdateUsecase = new AddressesUpdateUsecase({
      addressesRepository: this.repositoryImpl,
    });

    const res = await addressesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: AddressesDeleteDto) {
    const addressesDeleteUsecase = new AddressesDeleteUsecase({
      addressesRepository: this.repositoryImpl,
    });

    const res = await addressesDeleteUsecase.execute(body);

    return res;
  }
}


