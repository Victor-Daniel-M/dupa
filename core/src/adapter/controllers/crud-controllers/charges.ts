import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { BaseController } from 'base/base.controller';
import { Charge } from '@core/domain/entities/charges';

@ApiTags('charges')
@Controller('charges')
export class ChargeesController extends BaseController<Charge> {
  constructor(private readonly chargesRepository: ChargeRepositoryImpl) {
    super(chargesRepository);
  }
}
