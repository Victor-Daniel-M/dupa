import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { BaseController } from 'base/base.controller';
import { Property } from '@core/domain/entities/property';

@ApiTags('properties')
@Controller('properties')
export class PropertyController extends BaseController<Property> {
  constructor(private readonly propertyRepository: PropertyRepositoryImpl) {
    super(propertyRepository);
  }
}
