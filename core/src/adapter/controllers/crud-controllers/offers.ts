import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { BaseController } from 'base/base.controller';
import { Offer } from '@core/domain/entities/offers';

@ApiTags('offers')
@Controller('offers')
export class OfferController extends BaseController<Offer> {
  constructor(private readonly offerRepository: OfferRepositoryImpl) {
    super(offerRepository);
  }
}
