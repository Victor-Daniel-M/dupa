import { SearchMeta } from '@core/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class SearchMetaRepositoryImpl extends BaseRepository<SearchMeta> {}
