import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReactionRepositoryImpl } from '@core/infrastructure/repositories/reactions-repository';
import { BaseController } from 'base/base.controller';
import { Reaction } from '@core/domain/entities/reaction';

@ApiTags('reactions')
@Controller('reactions')
export class ReactionController extends BaseController<Reaction> {
  constructor(private readonly reactionRepository: ReactionRepositoryImpl) {
    super(reactionRepository);
  }
}
