import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-metas-repository';
import { OfferMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/offerMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OfferMetasDeleteUsecase {
  private offerMetaRepository: OfferMetaRepositoryImpl;

  constructor({
    offerMetaRepository,
  }: {
    offerMetaRepository: OfferMetaRepositoryImpl;
  }) {
    this.offerMetaRepository = offerMetaRepository;
  }

  async execute(data: z.infer<typeof OfferMetasDeleteSchema>) {
    // @ts-ignore
    const offerMeta = await this.offerMetaRepository.delete(data.id!);
    return offerMeta;
  }
}