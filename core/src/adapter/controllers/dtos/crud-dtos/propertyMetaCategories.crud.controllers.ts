import { PropertyMetaCategoriesCreateUsecase } from '@core/application/usecases/crud-usecases/property-meta-categories-create';
import { PropertyMetaCategoriesDeleteUsecase } from '@core/application/usecases/crud-usecases/property-meta-categories-delete';
import { PropertyMetaCategoriesGetUsecase } from '@core/application/usecases/crud-usecases/property-meta-categories-get';
import { PropertyMetaCategoriesUpdateUsecase } from '@core/application/usecases/crud-usecases/property-meta-categories-update';
import { PropertyMetaCategoriesViewUsecase } from '@core/application/usecases/crud-usecases/property-meta-categories-view';
import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-category-repository';
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
  PropertyMetaCategoriesCreateDto,
  PropertyMetaCategoriesDeleteDto,
  PropertyMetaCategoriesGetDto,
  PropertyMetaCategoriesUpdateDto,
  PropertyMetaCategoriesViewDto,
} from '../dtos/propertyMetaCategories.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('property-meta-categories')
export class PropertyMetaCategoriesCrudController {
  constructor(private repositoryImpl: PropertyMetaCategoryRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PropertyMetaCategoriesGetDto) {
    const propertyMetaCategoriesGetUsecase = new PropertyMetaCategoriesGetUsecase({
      propertyMetaCategoriesRepository: this.repositoryImpl,
    });

    const res = await propertyMetaCategoriesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PropertyMetaCategoriesViewDto) {
    const propertyMetaCategoriesViewUsecase = new PropertyMetaCategoriesViewUsecase({
      propertyMetaCategoriesRepository: this.repositoryImpl,
    });

    const res = await propertyMetaCategoriesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PropertyMetaCategoriesCreateDto) {
    const propertyMetaCategoriesCreateUsecase = new PropertyMetaCategoriesCreateUsecase({
      propertyMetaCategoriesRepository: this.repositoryImpl,
    });

    const res = await propertyMetaCategoriesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PropertyMetaCategoriesUpdateDto) {
    const propertyMetaCategoriesUpdateUsecase = new PropertyMetaCategoriesUpdateUsecase({
      propertyMetaCategoriesRepository: this.repositoryImpl,
    });

    const res = await propertyMetaCategoriesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PropertyMetaCategoriesDeleteDto) {
    const propertyMetaCategoriesDeleteUsecase = new PropertyMetaCategoriesDeleteUsecase({
      propertyMetaCategoriesRepository: this.repositoryImpl,
    });

    const res = await propertyMetaCategoriesDeleteUsecase.execute(body);

    return res;
  }
}


