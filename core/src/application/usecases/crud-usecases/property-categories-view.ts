import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
import { PropertyCategoriesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyCategoriesViewUsecase {
  private propertyCategoryRepository: PropertyCategoryRepositoryImpl;

  constructor({
    propertyCategoryRepository,
  }: {
    propertyCategoryRepository: PropertyCategoryRepositoryImpl;
  }) {
    this.propertyCategoryRepository = propertyCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyCategoriesViewSchema>) {
    // @ts-ignore
    const propertyCategory = await this.propertyCategoryRepository.findOrThrow(data);
    return propertyCategory;
  }
}