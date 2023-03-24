import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActionRepositoryImpl } from '@core/infrastructure/repositories/actions-repository';
import { BaseController } from 'base/base.controller';
import { Action } from '@core/domain/entities/actions';

@ApiTags('actions')
@Controller('actions')
export class ActionsController extends BaseController<Action> {
  constructor(private readonly actionsRepository: ActionRepositoryImpl) {
    super(actionsRepository);
  }
}
