import { LocationRepositoryImpl } from '@core/infrastructure/repositories/locations-repository';
import { LocationsGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/locations.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class LocationsGetUsecase {
  private locationRepository: LocationRepositoryImpl;

  constructor({
    locationRepository,
  }: {
    locationRepository: LocationRepositoryImpl;
  }) {
    this.locationRepository = locationRepository;
  }

  async execute(data: z.infer<typeof LocationsGetSchema>) {
    // @ts-ignore
    const location = await this.locationRepository.findAll();
    return location;
  }
}