import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { OffersViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/offers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OffersViewUsecase {
  private offerRepository: OfferRepositoryImpl;

  constructor({
    offerRepository,
  }: {
    offerRepository: OfferRepositoryImpl;
  }) {
    this.offerRepository = offerRepository;
  }

  async execute(data: z.infer<typeof OffersViewSchema>) {
    // @ts-ignore
    const offer = await this.offerRepository.findOrThrow(data);
    return offer;
  }
}