import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { OffersUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/offers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OffersUpdateUsecase {
  private offerRepository: OfferRepositoryImpl;

  constructor({
    offerRepository,
  }: {
    offerRepository: OfferRepositoryImpl;
  }) {
    this.offerRepository = offerRepository;
  }

  async execute(data: z.infer<typeof OffersUpdateSchema>) {
    // @ts-ignore
    const offer = await this.offerRepository.update(data.id!, data);;
    return offer;
  }
}