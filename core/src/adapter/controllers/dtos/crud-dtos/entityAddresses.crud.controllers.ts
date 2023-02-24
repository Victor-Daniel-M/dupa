import { EntityAddressesCreateUsecase } from '@core/application/usecases/crud-usecases/entity-address-create';
import { EntityAddressesDeleteUsecase } from '@core/application/usecases/crud-usecases/entity-address-delete';
import { EntityAddressesGetUsecase } from '@core/application/usecases/crud-usecases/entity-address-get';
import { EntityAddressesUpdateUsecase } from '@core/application/usecases/crud-usecases/entity-address-update';
import { EntityAddressesViewUsecase } from '@core/application/usecases/crud-usecases/entity-address-view';
import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-address-repository';
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
  EntityAddressesCreateDto,
  EntityAddressesDeleteDto,
  EntityAddressesGetDto,
  EntityAddressesUpdateDto,
  EntityAddressesViewDto,
} from '../dtos/entityAddresses.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('entity-address')
export class EntityAddressesCrudController {
  constructor(private repositoryImpl: EntityAddressRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: EntityAddressesGetDto) {
    const entityAddressesGetUsecase = new EntityAddressesGetUsecase({
      entityAddressesRepository: this.repositoryImpl,
    });

    const res = await entityAddressesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: EntityAddressesViewDto) {
    const entityAddressesViewUsecase = new EntityAddressesViewUsecase({
      entityAddressesRepository: this.repositoryImpl,
    });

    const res = await entityAddressesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: EntityAddressesCreateDto) {
    const entityAddressesCreateUsecase = new EntityAddressesCreateUsecase({
      entityAddressesRepository: this.repositoryImpl,
    });

    const res = await entityAddressesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: EntityAddressesUpdateDto) {
    const entityAddressesUpdateUsecase = new EntityAddressesUpdateUsecase({
      entityAddressesRepository: this.repositoryImpl,
    });

    const res = await entityAddressesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: EntityAddressesDeleteDto) {
    const entityAddressesDeleteUsecase = new EntityAddressesDeleteUsecase({
      entityAddressesRepository: this.repositoryImpl,
    });

    const res = await entityAddressesDeleteUsecase.execute(body);

    return res;
  }
}


