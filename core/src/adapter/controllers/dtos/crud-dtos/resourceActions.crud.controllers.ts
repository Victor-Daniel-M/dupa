import { ResourceActionsCreateUsecase } from '@core/application/usecases/crud-usecases/resource-action-create';
import { ResourceActionsDeleteUsecase } from '@core/application/usecases/crud-usecases/resource-action-delete';
import { ResourceActionsGetUsecase } from '@core/application/usecases/crud-usecases/resource-action-get';
import { ResourceActionsUpdateUsecase } from '@core/application/usecases/crud-usecases/resource-action-update';
import { ResourceActionsViewUsecase } from '@core/application/usecases/crud-usecases/resource-action-view';
import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-action-repository';
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
  ResourceActionsCreateDto,
  ResourceActionsDeleteDto,
  ResourceActionsGetDto,
  ResourceActionsUpdateDto,
  ResourceActionsViewDto,
} from '../dtos/resourceActions.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('resource-action')
export class ResourceActionsCrudController {
  constructor(private repositoryImpl: ResourceActionRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ResourceActionsGetDto) {
    const resourceActionsGetUsecase = new ResourceActionsGetUsecase({
      resourceActionsRepository: this.repositoryImpl,
    });

    const res = await resourceActionsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ResourceActionsViewDto) {
    const resourceActionsViewUsecase = new ResourceActionsViewUsecase({
      resourceActionsRepository: this.repositoryImpl,
    });

    const res = await resourceActionsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ResourceActionsCreateDto) {
    const resourceActionsCreateUsecase = new ResourceActionsCreateUsecase({
      resourceActionsRepository: this.repositoryImpl,
    });

    const res = await resourceActionsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ResourceActionsUpdateDto) {
    const resourceActionsUpdateUsecase = new ResourceActionsUpdateUsecase({
      resourceActionsRepository: this.repositoryImpl,
    });

    const res = await resourceActionsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ResourceActionsDeleteDto) {
    const resourceActionsDeleteUsecase = new ResourceActionsDeleteUsecase({
      resourceActionsRepository: this.repositoryImpl,
    });

    const res = await resourceActionsDeleteUsecase.execute(body);

    return res;
  }
}


