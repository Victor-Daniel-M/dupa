import { PlaceMetaRepositoryImpl } from '@core/infrastructure/repositories/place-metas-repository';
import { PlaceMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/placeMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlaceMetasCreateUsecase {
  private placeMetaRepository: PlaceMetaRepositoryImpl;

  constructor({
    placeMetaRepository,
  }: {
    placeMetaRepository: PlaceMetaRepositoryImpl;
  }) {
    this.placeMetaRepository = placeMetaRepository;
  }

  async execute(data: z.infer<typeof PlaceMetasCreateSchema>) {
    // @ts-ignore
    const placeMeta = await this.placeMetaRepository.createOrThrow(data, 'id');
    return placeMeta;
  }
}