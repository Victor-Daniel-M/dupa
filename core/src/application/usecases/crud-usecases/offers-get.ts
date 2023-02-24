import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { OffersGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/offers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OffersGetUsecase {
  private offerRepository: OfferRepositoryImpl;

  constructor({
    offerRepository,
  }: {
    offerRepository: OfferRepositoryImpl;
  }) {
    this.offerRepository = offerRepository;
  }

  async execute(data: z.infer<typeof OffersGetSchema>) {
    // @ts-ignore
    const offer = await this.offerRepository.findAll();
    return offer;
  }
}