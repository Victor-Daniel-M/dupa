import { PropertyMetasCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-metas-categories-repository';
import { PropertyMetasCategoriesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetasCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasCategoriesCreateUsecase {
  private propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;

  constructor({
    propertyMetasCategoryRepository,
  }: {
    propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;
  }) {
    this.propertyMetasCategoryRepository = propertyMetasCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasCategoriesCreateSchema>) {
    // @ts-ignore
    const propertyMetasCategory = await this.propertyMetasCategoryRepository.createOrThrow(data, 'id');
    return propertyMetasCategory;
  }
}