import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { PropertiesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/properties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertiesCreateUsecase {
  private propertyRepository: PropertyRepositoryImpl;

  constructor({
    propertyRepository,
  }: {
    propertyRepository: PropertyRepositoryImpl;
  }) {
    this.propertyRepository = propertyRepository;
  }

  async execute(data: z.infer<typeof PropertiesCreateSchema>) {
    // @ts-ignore
    const property = await this.propertyRepository.createOrThrow(data, 'id');
    return property;
  }
}