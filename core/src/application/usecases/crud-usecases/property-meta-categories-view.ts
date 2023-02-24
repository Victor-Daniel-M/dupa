import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-categories-repository';
import { PropertyMetaCategoriesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetaCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetaCategoriesViewUsecase {
  private propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;

  constructor({
    propertyMetaCategoryRepository,
  }: {
    propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;
  }) {
    this.propertyMetaCategoryRepository = propertyMetaCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetaCategoriesViewSchema>) {
    // @ts-ignore
    const propertyMetaCategory = await this.propertyMetaCategoryRepository.findOrThrow(data);
    return propertyMetaCategory;
  }
}