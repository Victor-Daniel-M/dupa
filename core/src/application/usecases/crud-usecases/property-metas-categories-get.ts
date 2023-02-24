import { PropertyMetasCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-metas-categories-repository';
import { PropertyMetasCategoriesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetasCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasCategoriesGetUsecase {
  private propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;

  constructor({
    propertyMetasCategoryRepository,
  }: {
    propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;
  }) {
    this.propertyMetasCategoryRepository = propertyMetasCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasCategoriesGetSchema>) {
    // @ts-ignore
    const propertyMetasCategory = await this.propertyMetasCategoryRepository.findAll();
    return propertyMetasCategory;
  }
}