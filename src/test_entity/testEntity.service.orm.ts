import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { TestEntity } from './domain/testEntity.entity';
import { BaseService } from '../base/base.service';

@Injectable()
export class TestEntityService extends BaseService<TestEntity> {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testEntityRepository: Repository<TestEntity>,
  ) {
    super(testEntityRepository);
  }
}
