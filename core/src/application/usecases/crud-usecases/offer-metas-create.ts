import { OfferMetaRepositoryImpl } from '@core/infrastructure/repositories/offer-metas-repository';
import { OfferMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/offerMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class OfferMetasCreateUsecase {
  private offerMetaRepository: OfferMetaRepositoryImpl;

  constructor({
    offerMetaRepository,
  }: {
    offerMetaRepository: OfferMetaRepositoryImpl;
  }) {
    this.offerMetaRepository = offerMetaRepository;
  }

  async execute(data: z.infer<typeof OfferMetasCreateSchema>) {
    // @ts-ignore
    const offerMeta = await this.offerMetaRepository.createOrThrow(data, 'id');
    return offerMeta;
  }
}