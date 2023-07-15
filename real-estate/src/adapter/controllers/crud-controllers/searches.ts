import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SearchRepositoryImpl } from '@db/infrastructure/repositories/searches-repository';
import { BaseController } from 'base/base.controller';
import { Search } from '@db/domain/entities/search';

@ApiTags('searches')
@Controller('searches')
export class SearchController extends BaseController<Search> {
  constructor(private readonly searchRepository: SearchRepositoryImpl) {
    super(searchRepository);
  }
}
