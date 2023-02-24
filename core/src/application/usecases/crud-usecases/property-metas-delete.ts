import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
import { PropertyMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasDeleteUsecase {
  private propertyMetaRepository: PropertyMetaRepositoryImpl;

  constructor({
    propertyMetaRepository,
  }: {
    propertyMetaRepository: PropertyMetaRepositoryImpl;
  }) {
    this.propertyMetaRepository = propertyMetaRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasDeleteSchema>) {
    // @ts-ignore
    const propertyMeta = await this.propertyMetaRepository.delete(data.id!);
    return propertyMeta;
  }
}