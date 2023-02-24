import { ResourceActionsCreateUsecase } from '@core/application/usecases/crud-usecases/resource-actions-create';
import { ResourceActionsDeleteUsecase } from '@core/application/usecases/crud-usecases/resource-actions-delete';
import { ResourceActionsGetUsecase } from '@core/application/usecases/crud-usecases/resource-actions-get';
import { ResourceActionsUpdateUsecase } from '@core/application/usecases/crud-usecases/resource-actions-update';
import { ResourceActionsViewUsecase } from '@core/application/usecases/crud-usecases/resource-actions-view';
import { ResourceActionRepositoryImpl } from '@core/infrastructure/repositories/resource-actions-repository';
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
} from '../dtos/crud-dtos/resourceActions.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('resource-actions')
export class ResourceActionsCrudController {
  constructor(private repositoryImpl: ResourceActionRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ResourceActionsGetDto) {
    const resourceActionsGetUsecase = new ResourceActionsGetUsecase({
      resourceActionRepository: this.repositoryImpl,
    });

    const res = await resourceActionsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ResourceActionsViewDto) {
    const resourceActionsViewUsecase = new ResourceActionsViewUsecase({
      resourceActionRepository: this.repositoryImpl,
    });

    const res = await resourceActionsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ResourceActionsCreateDto) {
    const resourceActionsCreateUsecase = new ResourceActionsCreateUsecase({
      resourceActionRepository: this.repositoryImpl,
    });

    const res = await resourceActionsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ResourceActionsUpdateDto) {
    const resourceActionsUpdateUsecase = new ResourceActionsUpdateUsecase({
      resourceActionRepository: this.repositoryImpl,
    });

    const res = await resourceActionsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ResourceActionsDeleteDto) {
    const resourceActionsDeleteUsecase = new ResourceActionsDeleteUsecase({
      resourceActionRepository: this.repositoryImpl,
    });

    const res = await resourceActionsDeleteUsecase.execute(body);

    return res;
  }
}


