import { PropertyMetasCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-metas-categories-repository';
import { PropertyMetasCategoriesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetasCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasCategoriesViewUsecase {
  private propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;

  constructor({
    propertyMetasCategoryRepository,
  }: {
    propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;
  }) {
    this.propertyMetasCategoryRepository = propertyMetasCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasCategoriesViewSchema>) {
    // @ts-ignore
    const propertyMetasCategory = await this.propertyMetasCategoryRepository.findOrThrow(data);
    return propertyMetasCategory;
  }
}