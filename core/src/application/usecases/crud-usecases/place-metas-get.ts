import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-metas-repository';
import { PlaceMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/placeMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlaceMetasGetUsecase {
  private placeMetaRepository: PlaceMetaRepositoryImpl;

  constructor({
    placeMetaRepository,
  }: {
    placeMetaRepository: PlaceMetaRepositoryImpl;
  }) {
    this.placeMetaRepository = placeMetaRepository;
  }

  async execute(data: z.infer<typeof PlaceMetasGetSchema>) {
    // @ts-ignore
    const placeMeta = await this.placeMetaRepository.findAll();
    return placeMeta;
  }
}