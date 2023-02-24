import { PropertyCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-categories-repository';
import { PropertyCategoriesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyCategoriesDeleteUsecase {
  private propertyCategoryRepository: PropertyCategoryRepositoryImpl;

  constructor({
    propertyCategoryRepository,
  }: {
    propertyCategoryRepository: PropertyCategoryRepositoryImpl;
  }) {
    this.propertyCategoryRepository = propertyCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyCategoriesDeleteSchema>) {
    // @ts-ignore
    const propertyCategory = await this.propertyCategoryRepository.delete(data.id!);
    return propertyCategory;
  }
}