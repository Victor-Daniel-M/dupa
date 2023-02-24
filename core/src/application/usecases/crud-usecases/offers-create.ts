import { OfferRepositoryImpl } from '@core/infrastructure/repositories/offers-repository';
import { OffersCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/offers.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OffersCreateUsecase {
  private offerRepository: OfferRepositoryImpl;

  constructor({
    offerRepository,
  }: {
    offerRepository: OfferRepositoryImpl;
  }) {
    this.offerRepository = offerRepository;
  }

  async execute(data: z.infer<typeof OffersCreateSchema>) {
    // @ts-ignore
    const offer = await this.offerRepository.createOrThrow(data, 'id');
    return offer;
  }
}