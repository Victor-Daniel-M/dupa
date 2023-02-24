import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
import { PlacesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/places.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlacesGetUsecase {
  private placeRepository: PlaceRepositoryImpl;

  constructor({
    placeRepository,
  }: {
    placeRepository: PlaceRepositoryImpl;
  }) {
    this.placeRepository = placeRepository;
  }

  async execute(data: z.infer<typeof PlacesGetSchema>) {
    // @ts-ignore
    const place = await this.placeRepository.findAll();
    return place;
  }
}