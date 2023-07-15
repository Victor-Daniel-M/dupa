import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResourceRepositoryImpl } from '@db/infrastructure/repositories/resources-repository';
import { BaseController } from 'base/base.controller';
import { Resource } from '@db/domain/entities/resource';

@ApiTags('resources')
@Controller('resources')
export class ResourceController extends BaseController<Resource> {
  constructor(private readonly resourceRepository: ResourceRepositoryImpl) {
    super(resourceRepository);
  }
}
