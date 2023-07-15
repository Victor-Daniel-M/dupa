import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActionRepositoryImpl } from '@db/infrastructure/repositories/actions-repository';
import { BaseController } from 'base/base.controller';
import { Action } from '@db/domain/entities/actions';

@ApiTags('actions')
@Controller('actions')
export class ActionsController extends BaseController<Action> {
  constructor(private readonly actionsRepository: ActionRepositoryImpl) {
    super(actionsRepository);
  }
}
