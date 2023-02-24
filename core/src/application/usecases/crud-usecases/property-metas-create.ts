import { PropertyMetaRepositoryImpl } from '@core/infrastructure/repositories/property-metas-repository';
import { PropertyMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/propertyMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertyMetasCreateUsecase {
  private propertyMetaRepository: PropertyMetaRepositoryImpl;

  constructor({
    propertyMetaRepository,
  }: {
    propertyMetaRepository: PropertyMetaRepositoryImpl;
  }) {
    this.propertyMetaRepository = propertyMetaRepository;
  }

  async execute(data: z.infer<typeof PropertyMetasCreateSchema>) {
    // @ts-ignore
    const propertyMeta = await this.propertyMetaRepository.createOrThrow(data, 'id');
    return propertyMeta;
  }
}