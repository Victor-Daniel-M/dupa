import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
import { PropertyCategoriesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyCategoriesGetUsecase {
  private propertyCategoryRepository: PropertyCategoryRepositoryImpl;

  constructor({
    propertyCategoryRepository,
  }: {
    propertyCategoryRepository: PropertyCategoryRepositoryImpl;
  }) {
    this.propertyCategoryRepository = propertyCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyCategoriesGetSchema>) {
    // @ts-ignore
    const propertyCategory = await this.propertyCategoryRepository.findAll();
    return propertyCategory;
  }
}