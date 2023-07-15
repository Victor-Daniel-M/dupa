import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthStrategyRepositoryImpl } from '@db/infrastructure/repositories/auth-strategies-repository';
import { BaseController } from 'base/base.controller';
import { AuthStrategy } from '@db/domain/entities/authStrategies';

@ApiTags('auth-strategies')
@Controller('auth-strategies')
export class AuthStrategyesController extends BaseController<AuthStrategy> {
  constructor(
    private readonly authStrategiesRepository: AuthStrategyRepositoryImpl,
  ) {
    super(authStrategiesRepository);
  }
}
