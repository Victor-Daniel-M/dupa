import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PropertyRepositoryImpl } from '@db/infrastructure/repositories/properties-repository';
import { BaseController } from 'base/base.controller';
import { Property } from '@db/domain/entities/property';

@ApiTags('properties')
@Controller('properties')
export class PropertyController extends BaseController<Property> {
  constructor(private readonly propertyRepository: PropertyRepositoryImpl) {
    super(propertyRepository);
  }
}
