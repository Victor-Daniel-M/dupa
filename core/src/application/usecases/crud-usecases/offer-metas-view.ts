import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-metas-repository';
import { OfferMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/offerMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OfferMetasViewUsecase {
  private offerMetaRepository: OfferMetaRepositoryImpl;

  constructor({
    offerMetaRepository,
  }: {
    offerMetaRepository: OfferMetaRepositoryImpl;
  }) {
    this.offerMetaRepository = offerMetaRepository;
  }

  async execute(data: z.infer<typeof OfferMetasViewSchema>) {
    // @ts-ignore
    const offerMeta = await this.offerMetaRepository.findOrThrow(data);
    return offerMeta;
  }
}