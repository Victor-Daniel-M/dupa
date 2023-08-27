import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OfferingRepositoryImpl } from '@db/infrastructure/repositories/offerings-repository';
import { BaseController } from 'base/base.controller';
import { Offering } from '@db/domain/entities/offering';

@ApiTags('offerings')
@Controller('offerings')
export class OfferingController extends BaseController<Offering> {
  constructor(private readonly offeringRepository: OfferingRepositoryImpl) {
    super(offeringRepository);
  }
}
