import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
import { PropertyMetasGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasGetUsecase {
  private propertyMetaRepository: PropertyMetaRepositoryImpl;

  constructor({
    propertyMetaRepository,
  }: {
    propertyMetaRepository: PropertyMetaRepositoryImpl;
  }) {
    this.propertyMetaRepository = propertyMetaRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasGetSchema>) {
    // @ts-ignore
    const propertyMeta = await this.propertyMetaRepository.findAll();
    return propertyMeta;
  }
}