import { PropertyMetaCategory } from '@db/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyMetaCategoryRepositoryImpl extends BaseRepository<PropertyMetaCategory> {
  constructor(
    @InjectRepository(PropertyMetaCategory)
    public repository: Repository<PropertyMetaCategory>,
  ) {
    super(repository);
  }
}
