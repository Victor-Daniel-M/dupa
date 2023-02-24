import { PropertyMetasCategoryRepositoryImpl } from '@core/infrastructure/repositories/property-metas-categories-repository';
import { PropertyMetasCategoriesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetasCategories.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasCategoriesDeleteUsecase {
  private propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;

  constructor({
    propertyMetasCategoryRepository,
  }: {
    propertyMetasCategoryRepository: PropertyMetasCategoryRepositoryImpl;
  }) {
    this.propertyMetasCategoryRepository = propertyMetasCategoryRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasCategoriesDeleteSchema>) {
    // @ts-ignore
    const propertyMetasCategory = await this.propertyMetasCategoryRepository.delete(data.id!);
    return propertyMetasCategory;
  }
}