import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
import { PropertyCategoriesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyCategoriesUpdateUsecase {
  private propertyCategoryRepository: PropertyCategoryRepositoryImpl;

  constructor({
    propertyCategoryRepository,
  }: {
    propertyCategoryRepository: PropertyCategoryRepositoryImpl;
  }) {
    this.propertyCategoryRepository = propertyCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyCategoriesUpdateSchema>) {
    // @ts-ignore
    const propertyCategory = await this.propertyCategoryRepository.update(data.id!, data);;
    return propertyCategory;
  }
}