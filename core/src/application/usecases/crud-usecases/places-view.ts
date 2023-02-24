import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
import { PlacesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/places.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlacesViewUsecase {
  private placeRepository: PlaceRepositoryImpl;

  constructor({
    placeRepository,
  }: {
    placeRepository: PlaceRepositoryImpl;
  }) {
    this.placeRepository = placeRepository;
  }

  async execute(data: z.infer<typeof PlacesViewSchema>) {
    // @ts-ignore
    const place = await this.placeRepository.findOrThrow(data);
    return place;
  }
}