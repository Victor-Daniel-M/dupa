import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConfigRepositoryImpl } from '@db/infrastructure/repositories/configs-repository';
import { BaseController } from 'base/base.controller';
import { Config } from '@db/domain/entities/configs';

@ApiTags('configs')
@Controller('configs')
export class ConfigsController extends BaseController<Config> {
  constructor(private readonly configsRepository: ConfigRepositoryImpl) {
    super(configsRepository);
  }
}
