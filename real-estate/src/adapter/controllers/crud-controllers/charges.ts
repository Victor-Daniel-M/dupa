import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChargeRepositoryImpl } from '@db/infrastructure/repositories/charges-repository';
import { BaseController } from 'base/base.controller';
import { Charge } from '@db/domain/entities/charges';

@ApiTags('charges')
@Controller('charges')
export class ChargeesController extends BaseController<Charge> {
  constructor(private readonly chargesRepository: ChargeRepositoryImpl) {
    super(chargesRepository);
  }
}
