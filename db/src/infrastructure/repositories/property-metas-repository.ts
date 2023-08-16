import { PropertyMeta } from '@db/domain/entities/property';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyMetaRepositoryImpl extends BaseRepository<PropertyMeta> {
  constructor(
    @InjectRepository(PropertyMeta)
    public repository: Repository<PropertyMeta>,
  ) {
    super(repository);
  }
}
