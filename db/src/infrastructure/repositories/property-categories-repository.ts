import { PropertyCategory } from '@db/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyCategoryRepositoryImpl extends BaseRepository<PropertyCategory> {
  constructor(
    @InjectRepository(PropertyCategory)
    public repository: Repository<PropertyCategory>,
  ) {
    super(repository);
  }
}
