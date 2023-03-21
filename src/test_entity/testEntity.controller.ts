import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TestEntity } from './domain/testEntity.entity';
import { BaseController } from '../../base/base.controller';
import { TestEntityService } from './testEntity.service.orm';

@ApiTags('test_entity')
@Controller('test_entity')
export class TestEntityController extends BaseController<TestEntity> {
  constructor(private readonly testEntityService: TestEntityService) {
    super(testEntityService);
  }
}
