import { SearchesCreateUsecase } from '@core/application/usecases/crud-usecases/searches-create';
import { SearchesDeleteUsecase } from '@core/application/usecases/crud-usecases/searches-delete';
import { SearchesGetUsecase } from '@core/application/usecases/crud-usecases/searches-get';
import { SearchesUpdateUsecase } from '@core/application/usecases/crud-usecases/searches-update';
import { SearchesViewUsecase } from '@core/application/usecases/crud-usecases/searches-view';
import { SearchRepositoryImpl } from '@core/infrastructure/repositories/searches-repository';
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
} from '../dtos/crud-dtos/searches.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('searches')
export class SearchesCrudController {
  constructor(private repositoryImpl: SearchRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: SearchesGetDto) {
    const searchesGetUsecase = new SearchesGetUsecase({
      searchRepository: this.repositoryImpl,
    });

    const res = await searchesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: SearchesViewDto) {
    const searchesViewUsecase = new SearchesViewUsecase({
      searchRepository: this.repositoryImpl,
    });

    const res = await searchesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: SearchesCreateDto) {
    const searchesCreateUsecase = new SearchesCreateUsecase({
      searchRepository: this.repositoryImpl,
    });

    const res = await searchesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: SearchesUpdateDto) {
    const searchesUpdateUsecase = new SearchesUpdateUsecase({
      searchRepository: this.repositoryImpl,
    });

    const res = await searchesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: SearchesDeleteDto) {
    const searchesDeleteUsecase = new SearchesDeleteUsecase({
      searchRepository: this.repositoryImpl,
    });

    const res = await searchesDeleteUsecase.execute(body);

    return res;
  }
}


