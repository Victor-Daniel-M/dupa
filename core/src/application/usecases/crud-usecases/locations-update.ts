import { LocationRepositoryImpl } from '@core/infrastructure/repositories/locations-repository';
import { LocationsUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/locations.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class LocationsUpdateUsecase {
  private locationRepository: LocationRepositoryImpl;

  constructor({
    locationRepository,
  }: {
    locationRepository: LocationRepositoryImpl;
  }) {
    this.locationRepository = locationRepository;
  }

  async execute(data: z.infer<typeof LocationsUpdateSchema>) {
    // @ts-ignore
    const location = await this.locationRepository.update(data.id!, data);;
    return location;
  }
}