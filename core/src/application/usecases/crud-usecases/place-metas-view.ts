import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-metas-repository';
import { PlaceMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/placeMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlaceMetasViewUsecase {
  private placeMetaRepository: PlaceMetaRepositoryImpl;

  constructor({
    placeMetaRepository,
  }: {
    placeMetaRepository: PlaceMetaRepositoryImpl;
  }) {
    this.placeMetaRepository = placeMetaRepository;
  }

  async execute(data: z.infer<typeof PlaceMetasViewSchema>) {
    // @ts-ignore
    const placeMeta = await this.placeMetaRepository.findOrThrow(data);
    return placeMeta;
  }
}