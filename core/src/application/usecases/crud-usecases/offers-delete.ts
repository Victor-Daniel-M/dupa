import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { OffersDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/offers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OffersDeleteUsecase {
  private offerRepository: OfferRepositoryImpl;

  constructor({
    offerRepository,
  }: {
    offerRepository: OfferRepositoryImpl;
  }) {
    this.offerRepository = offerRepository;
  }

  async execute(data: z.infer<typeof OffersDeleteSchema>) {
    // @ts-ignore
    const offer = await this.offerRepository.delete(data.id!);
    return offer;
  }
}