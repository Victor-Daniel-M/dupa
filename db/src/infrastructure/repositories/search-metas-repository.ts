import { SearchMeta } from '@db/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class SearchMetaRepositoryImpl extends BaseRepository<SearchMeta> {
  constructor(
    @InjectRepository(SearchMeta)
    public repository: Repository<SearchMeta>,
  ) {
    super(repository);
  }
}
