import { Search } from '@core/domain/entities/search';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class SearchRepositoryImpl extends RepositoryImpl<Search> {}
