import { SearchMeta } from '@core/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class SearchMetaRepositoryImpl extends RepositoryImpl<SearchMeta> {}
