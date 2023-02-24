import { ActionsCreateUsecase } from '@core/application/usecases/crud-usecases/actions-create';
import { ActionsDeleteUsecase } from '@core/application/usecases/crud-usecases/actions-delete';
import { ActionsGetUsecase } from '@core/application/usecases/crud-usecases/actions-get';
import { ActionsUpdateUsecase } from '@core/application/usecases/crud-usecases/actions-update';
import { ActionsViewUsecase } from '@core/application/usecases/crud-usecases/actions-view';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
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
  ActionsCreateDto,
  ActionsDeleteDto,
  ActionsGetDto,
  ActionsUpdateDto,
  ActionsViewDto,
} from '../dtos/crud-dtos/actions.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('actions')
export class ActionsCrudController {
  constructor(private repositoryImpl: ActionRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: ActionsGetDto) {
    const actionsGetUsecase = new ActionsGetUsecase({
      actionRepository: this.repositoryImpl,
    });

    const res = await actionsGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: ActionsViewDto) {
    const actionsViewUsecase = new ActionsViewUsecase({
      actionRepository: this.repositoryImpl,
    });

    const res = await actionsViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: ActionsCreateDto) {
    const actionsCreateUsecase = new ActionsCreateUsecase({
      actionRepository: this.repositoryImpl,
    });

    const res = await actionsCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: ActionsUpdateDto) {
    const actionsUpdateUsecase = new ActionsUpdateUsecase({
      actionRepository: this.repositoryImpl,
    });

    const res = await actionsUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: ActionsDeleteDto) {
    const actionsDeleteUsecase = new ActionsDeleteUsecase({
      actionRepository: this.repositoryImpl,
    });

    const res = await actionsDeleteUsecase.execute(body);

    return res;
  }
}


