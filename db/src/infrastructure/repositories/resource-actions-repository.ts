import { ResourceAction } from '@db/domain/entities/actions';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ResourceActionRepositoryImpl extends BaseRepository<ResourceAction> {
  constructor(
    @InjectRepository(ResourceAction)
    public repository: Repository<ResourceAction>,
  ) {
    super(repository);
  }
}
