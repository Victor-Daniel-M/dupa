import { ResourcesCreateUsecase } from '@core/application/usecases/crud-usecases/resource-create';
import { ResourcesDeleteUsecase } from '@core/application/usecases/crud-usecases/resource-delete';
import { ResourcesGetUsecase } from '@core/application/usecases/crud-usecases/resource-get';
import { ResourcesUpdateUsecase } from '@core/application/usecases/crud-usecases/resource-update';
import { ResourcesViewUsecase } from '@core/application/usecases/crud-usecases/resource-view';
import { ResourceRepositoryImpl } from '@core/infrastructure/repositories/resource-repository';
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
  ResourcesCreateDto,
  ResourcesDeleteDto,
  ResourcesGetDto,
  ResourcesUpdateDto,
  ResourcesViewDto,
} from '../dtos/resources.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('resource')
export class ResourcesCrudController {
  constructor(private repositoryImpl: ResourceRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ResourcesGetDto) {
    const resourcesGetUsecase = new ResourcesGetUsecase({
      resourcesRepository: this.repositoryImpl,
    });

    const res = await resourcesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ResourcesViewDto) {
    const resourcesViewUsecase = new ResourcesViewUsecase({
      resourcesRepository: this.repositoryImpl,
    });

    const res = await resourcesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ResourcesCreateDto) {
    const resourcesCreateUsecase = new ResourcesCreateUsecase({
      resourcesRepository: this.repositoryImpl,
    });

    const res = await resourcesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ResourcesUpdateDto) {
    const resourcesUpdateUsecase = new ResourcesUpdateUsecase({
      resourcesRepository: this.repositoryImpl,
    });

    const res = await resourcesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ResourcesDeleteDto) {
    const resourcesDeleteUsecase = new ResourcesDeleteUsecase({
      resourcesRepository: this.repositoryImpl,
    });

    const res = await resourcesDeleteUsecase.execute(body);

    return res;
  }
}


