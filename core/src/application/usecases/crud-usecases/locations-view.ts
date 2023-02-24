import { LocationRepositoryImpl } from '@core/infrastructure/repositories/locations-repository';
import { LocationsViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/locations.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class LocationsViewUsecase {
  private locationRepository: LocationRepositoryImpl;

  constructor({
    locationRepository,
  }: {
    locationRepository: LocationRepositoryImpl;
  }) {
    this.locationRepository = locationRepository;
  }

  async execute(data: z.infer<typeof LocationsViewSchema>) {
    // @ts-ignore
    const location = await this.locationRepository.findOrThrow(data);
    return location;
  }
}