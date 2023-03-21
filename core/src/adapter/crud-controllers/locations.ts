import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationRepositoryImpl } from '@core/infrastructure/repositories/locations-repository';
import { BaseController } from 'base/base.controller';
import { Location } from '@core/domain/entities/location';

@ApiTags('locations')
@Controller('locations')
export class LocationsController extends BaseController<Location> {
  constructor(private readonly locationsRepository: LocationRepositoryImpl) {
    super(locationsRepository);
  }
}
