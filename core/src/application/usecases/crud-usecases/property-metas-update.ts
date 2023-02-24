import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
import { PropertyMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasUpdateUsecase {
  private propertyMetaRepository: PropertyMetaRepositoryImpl;

  constructor({
    propertyMetaRepository,
  }: {
    propertyMetaRepository: PropertyMetaRepositoryImpl;
  }) {
    this.propertyMetaRepository = propertyMetaRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasUpdateSchema>) {
    // @ts-ignore
    const propertyMeta = await this.propertyMetaRepository.update(data.id!, data);;
    return propertyMeta;
  }
}