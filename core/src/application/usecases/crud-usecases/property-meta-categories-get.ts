import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-categories-repository';
import { PropertyMetaCategoriesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetaCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetaCategoriesGetUsecase {
  private propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;

  constructor({
    propertyMetaCategoryRepository,
  }: {
    propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;
  }) {
    this.propertyMetaCategoryRepository = propertyMetaCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetaCategoriesGetSchema>) {
    // @ts-ignore
    const propertyMetaCategory = await this.propertyMetaCategoryRepository.findAll();
    return propertyMetaCategory;
  }
}