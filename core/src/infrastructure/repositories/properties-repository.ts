import { Property } from '@core/domain/entities/property';
import { TYPES } from '@core/domain/types';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyRepositoryImpl extends BaseRepository<Property> {
  constructor(
    @InjectRepository(Property)
    repository: Repository<Property>,
  ) {
    super(repository);
  }
}
