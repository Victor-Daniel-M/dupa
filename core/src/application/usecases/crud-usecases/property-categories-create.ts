import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
import { PropertyCategoriesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyCategoriesCreateUsecase {
  private propertyCategoryRepository: PropertyCategoryRepositoryImpl;

  constructor({
    propertyCategoryRepository,
  }: {
    propertyCategoryRepository: PropertyCategoryRepositoryImpl;
  }) {
    this.propertyCategoryRepository = propertyCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyCategoriesCreateSchema>) {
    // @ts-ignore
    const propertyCategory = await this.propertyCategoryRepository.createOrThrow(data, 'id');
    return propertyCategory;
  }
}