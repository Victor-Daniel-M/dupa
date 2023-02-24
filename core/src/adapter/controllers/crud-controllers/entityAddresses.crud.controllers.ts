import { EntityAddressesCreateUsecase } from '@core/application/usecases/crud-usecases/entity-addresses-create';
import { EntityAddressesDeleteUsecase } from '@core/application/usecases/crud-usecases/entity-addresses-delete';
import { EntityAddressesGetUsecase } from '@core/application/usecases/crud-usecases/entity-addresses-get';
import { EntityAddressesUpdateUsecase } from '@core/application/usecases/crud-usecases/entity-addresses-update';
import { EntityAddressesViewUsecase } from '@core/application/usecases/crud-usecases/entity-addresses-view';
import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
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
} from '../dtos/crud-dtos/entityAddresses.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('entity-addresses')
export class EntityAddressesCrudController {
  constructor(private repositoryImpl: EntityAddressRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: EntityAddressesGetDto) {
    const entityAddressesGetUsecase = new EntityAddressesGetUsecase({
      entityAddressRepository: this.repositoryImpl,
    });

    const res = await entityAddressesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: EntityAddressesViewDto) {
    const entityAddressesViewUsecase = new EntityAddressesViewUsecase({
      entityAddressRepository: this.repositoryImpl,
    });

    const res = await entityAddressesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: EntityAddressesCreateDto) {
    const entityAddressesCreateUsecase = new EntityAddressesCreateUsecase({
      entityAddressRepository: this.repositoryImpl,
    });

    const res = await entityAddressesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: EntityAddressesUpdateDto) {
    const entityAddressesUpdateUsecase = new EntityAddressesUpdateUsecase({
      entityAddressRepository: this.repositoryImpl,
    });

    const res = await entityAddressesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: EntityAddressesDeleteDto) {
    const entityAddressesDeleteUsecase = new EntityAddressesDeleteUsecase({
      entityAddressRepository: this.repositoryImpl,
    });

    const res = await entityAddressesDeleteUsecase.execute(body);

    return res;
  }
}


