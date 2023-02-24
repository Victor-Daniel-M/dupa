import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-categories-repository';
import { PropertyMetaCategoriesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetaCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetaCategoriesCreateUsecase {
  private propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;

  constructor({
    propertyMetaCategoryRepository,
  }: {
    propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;
  }) {
    this.propertyMetaCategoryRepository = propertyMetaCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetaCategoriesCreateSchema>) {
    // @ts-ignore
    const propertyMetaCategory = await this.propertyMetaCategoryRepository.createOrThrow(data, 'id');
    return propertyMetaCategory;
  }
}