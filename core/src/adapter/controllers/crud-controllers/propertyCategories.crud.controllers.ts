import { PropertyCategoriesCreateUsecase } from '@core/application/usecases/crud-usecases/property-categories-create';
import { PropertyCategoriesDeleteUsecase } from '@core/application/usecases/crud-usecases/property-categories-delete';
import { PropertyCategoriesGetUsecase } from '@core/application/usecases/crud-usecases/property-categories-get';
import { PropertyCategoriesUpdateUsecase } from '@core/application/usecases/crud-usecases/property-categories-update';
import { PropertyCategoriesViewUsecase } from '@core/application/usecases/crud-usecases/property-categories-view';
import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
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
  PropertyCategoriesCreateDto,
  PropertyCategoriesDeleteDto,
  PropertyCategoriesGetDto,
  PropertyCategoriesUpdateDto,
  PropertyCategoriesViewDto,
} from '../dtos/crud-dtos/propertyCategories.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('property-categories')
export class PropertyCategoriesCrudController {
  constructor(private repositoryImpl: PropertyCategoryRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: PropertyCategoriesGetDto) {
    const propertyCategoriesGetUsecase = new PropertyCategoriesGetUsecase({
      propertyCategoryRepository: this.repositoryImpl,
    });

    const res = await propertyCategoriesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: PropertyCategoriesViewDto) {
    const propertyCategoriesViewUsecase = new PropertyCategoriesViewUsecase({
      propertyCategoryRepository: this.repositoryImpl,
    });

    const res = await propertyCategoriesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: PropertyCategoriesCreateDto) {
    const propertyCategoriesCreateUsecase = new PropertyCategoriesCreateUsecase({
      propertyCategoryRepository: this.repositoryImpl,
    });

    const res = await propertyCategoriesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: PropertyCategoriesUpdateDto) {
    const propertyCategoriesUpdateUsecase = new PropertyCategoriesUpdateUsecase({
      propertyCategoryRepository: this.repositoryImpl,
    });

    const res = await propertyCategoriesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: PropertyCategoriesDeleteDto) {
    const propertyCategoriesDeleteUsecase = new PropertyCategoriesDeleteUsecase({
      propertyCategoryRepository: this.repositoryImpl,
    });

    const res = await propertyCategoriesDeleteUsecase.execute(body);

    return res;
  }
}


