import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
import { PlacesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/places.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlacesCreateUsecase {
  private placeRepository: PlaceRepositoryImpl;

  constructor({
    placeRepository,
  }: {
    placeRepository: PlaceRepositoryImpl;
  }) {
    this.placeRepository = placeRepository;
  }

  async execute(data: z.infer<typeof PlacesCreateSchema>) {
    // @ts-ignore
    const place = await this.placeRepository.createOrThrow(data, 'id');
    return place;
  }
}