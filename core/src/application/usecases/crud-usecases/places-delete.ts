import { PlaceRepositoryImpl } from '@core/infrastructure/repositories/places-repository';
import { PlacesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/places.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PlacesDeleteUsecase {
  private placeRepository: PlaceRepositoryImpl;

  constructor({
    placeRepository,
  }: {
    placeRepository: PlaceRepositoryImpl;
  }) {
    this.placeRepository = placeRepository;
  }

  async execute(data: z.infer<typeof PlacesDeleteSchema>) {
    // @ts-ignore
    const place = await this.placeRepository.delete(data.id!);
    return place;
  }
}