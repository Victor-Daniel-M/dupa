import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlaceRepositoryImpl } from '@db/infrastructure/repositories/places-repository';
import { BaseController } from 'base/base.controller';
import { Place } from '@db/domain/entities/places';

@ApiTags('places')
@Controller('places')
export class PlaceController extends BaseController<Place> {
  constructor(private readonly placeRepository: PlaceRepositoryImpl) {
    super(placeRepository);
  }
}
