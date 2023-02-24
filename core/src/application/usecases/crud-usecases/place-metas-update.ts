import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-metas-repository';
import { PlaceMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/placeMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlaceMetasUpdateUsecase {
  private placeMetaRepository: PlaceMetaRepositoryImpl;

  constructor({
    placeMetaRepository,
  }: {
    placeMetaRepository: PlaceMetaRepositoryImpl;
  }) {
    this.placeMetaRepository = placeMetaRepository;
  }

  async execute(data: z.infer<typeof PlaceMetasUpdateSchema>) {
    // @ts-ignore
    const placeMeta = await this.placeMetaRepository.update(data.id!, data);;
    return placeMeta;
  }
}