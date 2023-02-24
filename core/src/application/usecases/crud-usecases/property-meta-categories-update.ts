import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-categories-repository';
import { PropertyMetaCategoriesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetaCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetaCategoriesUpdateUsecase {
  private propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;

  constructor({
    propertyMetaCategoryRepository,
  }: {
    propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;
  }) {
    this.propertyMetaCategoryRepository = propertyMetaCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetaCategoriesUpdateSchema>) {
    // @ts-ignore
    const propertyMetaCategory = await this.propertyMetaCategoryRepository.update(data.id!, data);;
    return propertyMetaCategory;
  }
}