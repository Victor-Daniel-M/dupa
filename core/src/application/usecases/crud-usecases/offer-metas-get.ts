import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-metas-repository';
import { OfferMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/offerMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OfferMetasGetUsecase {
  private offerMetaRepository: OfferMetaRepositoryImpl;

  constructor({
    offerMetaRepository,
  }: {
    offerMetaRepository: OfferMetaRepositoryImpl;
  }) {
    this.offerMetaRepository = offerMetaRepository;
  }

  async execute(data: z.infer<typeof OfferMetasGetSchema>) {
    // @ts-ignore
    const offerMeta = await this.offerMetaRepository.findAll();
    return offerMeta;
  }
}