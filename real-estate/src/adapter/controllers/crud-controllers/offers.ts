import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OfferRepositoryImpl } from '@db/infrastructure/repositories/offers-repository';
import { BaseController } from 'base/base.controller';
import { Offer } from '@db/domain/entities/offers';

@ApiTags('offers')
@Controller('offers')
export class OfferController extends BaseController<Offer> {
  constructor(private readonly offerRepository: OfferRepositoryImpl) {
    super(offerRepository);
  }
}
