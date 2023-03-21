import { Search } from '@core/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class SearchRepositoryImpl extends BaseRepository<Search> {}
