import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
import { PropertyMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasViewUsecase {
  private propertyMetaRepository: PropertyMetaRepositoryImpl;

  constructor({
    propertyMetaRepository,
  }: {
    propertyMetaRepository: PropertyMetaRepositoryImpl;
  }) {
    this.propertyMetaRepository = propertyMetaRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasViewSchema>) {
    // @ts-ignore
    const propertyMeta = await this.propertyMetaRepository.findOrThrow(data);
    return propertyMeta;
  }
}