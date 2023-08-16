import { Resource } from '@db/domain/entities/resource';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ResourceRepositoryImpl extends BaseRepository<Resource> {
  constructor(
    @InjectRepository(Resource)
    public repository: Repository<Resource>,
  ) {
    super(repository);
  }
}
