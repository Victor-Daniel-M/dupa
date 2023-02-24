import { SearchMetasCreateUsecase } from '@core/application/usecases/crud-usecases/search-meta-create';
import { SearchMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/search-meta-delete';
import { SearchMetasGetUsecase } from '@core/application/usecases/crud-usecases/search-meta-get';
import { SearchMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/search-meta-update';
import { SearchMetasViewUsecase } from '@core/application/usecases/crud-usecases/search-meta-view';
import { SearchMetaRepositoryImpl } from '@core/infrastructure/repositories/search-meta-repository';
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
  SearchMetasCreateDto,
  SearchMetasDeleteDto,
  SearchMetasGetDto,
  SearchMetasUpdateDto,
  SearchMetasViewDto,
} from '../dtos/searchMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('search-meta')
export class SearchMetasCrudController {
  constructor(private repositoryImpl: SearchMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: SearchMetasGetDto) {
    const searchMetasGetUsecase = new SearchMetasGetUsecase({
      searchMetasRepository: this.repositoryImpl,
    });

    const res = await searchMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: SearchMetasViewDto) {
    const searchMetasViewUsecase = new SearchMetasViewUsecase({
      searchMetasRepository: this.repositoryImpl,
    });

    const res = await searchMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: SearchMetasCreateDto) {
    const searchMetasCreateUsecase = new SearchMetasCreateUsecase({
      searchMetasRepository: this.repositoryImpl,
    });

    const res = await searchMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: SearchMetasUpdateDto) {
    const searchMetasUpdateUsecase = new SearchMetasUpdateUsecase({
      searchMetasRepository: this.repositoryImpl,
    });

    const res = await searchMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: SearchMetasDeleteDto) {
    const searchMetasDeleteUsecase = new SearchMetasDeleteUsecase({
      searchMetasRepository: this.repositoryImpl,
    });

    const res = await searchMetasDeleteUsecase.execute(body);

    return res;
  }
}


