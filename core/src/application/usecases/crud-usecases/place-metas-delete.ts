import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-metas-repository';
import { PlaceMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/placeMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlaceMetasDeleteUsecase {
  private placeMetaRepository: PlaceMetaRepositoryImpl;

  constructor({
    placeMetaRepository,
  }: {
    placeMetaRepository: PlaceMetaRepositoryImpl;
  }) {
    this.placeMetaRepository = placeMetaRepository;
  }

  async execute(data: z.infer<typeof PlaceMetasDeleteSchema>) {
    // @ts-ignore
    const placeMeta = await this.placeMetaRepository.delete(data.id!);
    return placeMeta;
  }
}