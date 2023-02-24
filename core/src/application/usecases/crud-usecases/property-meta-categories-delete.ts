import { PropertyMetaCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-meta-categories-repository';
import { PropertyMetaCategoriesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetaCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetaCategoriesDeleteUsecase {
  private propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;

  constructor({
    propertyMetaCategoryRepository,
  }: {
    propertyMetaCategoryRepository: PropertyMetaCategoryRepositoryImpl;
  }) {
    this.propertyMetaCategoryRepository = propertyMetaCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetaCategoriesDeleteSchema>) {
    // @ts-ignore
    const propertyMetaCategory = await this.propertyMetaCategoryRepository.delete(data.id!);
    return propertyMetaCategory;
  }
}