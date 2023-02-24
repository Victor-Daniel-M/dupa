import { SearchesCreateUsecase } from '@core/application/usecases/crud-usecases/search-create';
import { SearchesDeleteUsecase } from '@core/application/usecases/crud-usecases/search-delete';
import { SearchesGetUsecase } from '@core/application/usecases/crud-usecases/search-get';
import { SearchesUpdateUsecase } from '@core/application/usecases/crud-usecases/search-update';
import { SearchesViewUsecase } from '@core/application/usecases/crud-usecases/search-view';
import { SearchRepositoryImpl } from '@core/infrastructure/repositories/search-repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  SearchesCreateDto,
  SearchesDeleteDto,
  SearchesGetDto,
  SearchesUpdateDto,
  SearchesViewDto,
} from '../dtos/searches.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('search')
export class SearchesCrudController {
  constructor(private repositoryImpl: SearchRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: SearchesGetDto) {
    const searchesGetUsecase = new SearchesGetUsecase({
      searchesRepository: this.repositoryImpl,
    });

    const res = await searchesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: SearchesViewDto) {
    const searchesViewUsecase = new SearchesViewUsecase({
      searchesRepository: this.repositoryImpl,
    });

    const res = await searchesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: SearchesCreateDto) {
    const searchesCreateUsecase = new SearchesCreateUsecase({
      searchesRepository: this.repositoryImpl,
    });

    const res = await searchesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: SearchesUpdateDto) {
    const searchesUpdateUsecase = new SearchesUpdateUsecase({
      searchesRepository: this.repositoryImpl,
    });

    const res = await searchesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: SearchesDeleteDto) {
    const searchesDeleteUsecase = new SearchesDeleteUsecase({
      searchesRepository: this.repositoryImpl,
    });

    const res = await searchesDeleteUsecase.execute(body);

    return res;
  }
}


