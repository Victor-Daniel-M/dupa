import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
import { PlacesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/places.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlacesUpdateUsecase {
  private placeRepository: PlaceRepositoryImpl;

  constructor({
    placeRepository,
  }: {
    placeRepository: PlaceRepositoryImpl;
  }) {
    this.placeRepository = placeRepository;
  }

  async execute(data: z.infer<typeof PlacesUpdateSchema>) {
    // @ts-ignore
    const place = await this.placeRepository.update(data.id!, data);;
    return place;
  }
}