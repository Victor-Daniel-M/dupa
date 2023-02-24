import { LocationRepositoryImpl } from '@core/infrastructure/repositories/locations-repository';
import { LocationsDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/locations.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class LocationsDeleteUsecase {
  private locationRepository: LocationRepositoryImpl;

  constructor({
    locationRepository,
  }: {
    locationRepository: LocationRepositoryImpl;
  }) {
    this.locationRepository = locationRepository;
  }

  async execute(data: z.infer<typeof LocationsDeleteSchema>) {
    // @ts-ignore
    const location = await this.locationRepository.delete(data.id!);
    return location;
  }
}