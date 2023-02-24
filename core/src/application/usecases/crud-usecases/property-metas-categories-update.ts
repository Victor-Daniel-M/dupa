import { PropertyMetasCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-metas-categories-repository';
import { PropertyMetasCategoriesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetasCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasCategoriesUpdateUsecase {
  private propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;

  constructor({
    propertyMetasCategoryRepository,
  }: {
    propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;
  }) {
    this.propertyMetasCategoryRepository = propertyMetasCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasCategoriesUpdateSchema>) {
    // @ts-ignore
    const propertyMetasCategory = await this.propertyMetasCategoryRepository.update(data.id!, data);;
    return propertyMetasCategory;
  }
}