import { Search } from '@db/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class SearchRepositoryImpl extends BaseRepository<Search> {}
