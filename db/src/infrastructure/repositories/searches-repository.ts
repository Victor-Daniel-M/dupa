import { Search } from '@db/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class SearchRepositoryImpl extends BaseRepository<Search> {
  constructor(
    @InjectRepository(Search)
    public repository: Repository<Search>,
  ) {
    super(repository);
  }
}
