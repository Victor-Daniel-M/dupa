import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-metas-repository';
import { OfferMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/offerMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OfferMetasUpdateUsecase {
  private offerMetaRepository: OfferMetaRepositoryImpl;

  constructor({
    offerMetaRepository,
  }: {
    offerMetaRepository: OfferMetaRepositoryImpl;
  }) {
    this.offerMetaRepository = offerMetaRepository;
  }

  async execute(data: z.infer<typeof OfferMetasUpdateSchema>) {
    // @ts-ignore
    const offerMeta = await this.offerMetaRepository.update(data.id!, data);;
    return offerMeta;
  }
}