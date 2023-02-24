import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { PropertiesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/properties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertiesGetUsecase {
  private propertyRepository: PropertyRepositoryImpl;

  constructor({
    propertyRepository,
  }: {
    propertyRepository: PropertyRepositoryImpl;
  }) {
    this.propertyRepository = propertyRepository;
  }

  async execute(data: z.infer<typeof PropertiesGetSchema>) {
    // @ts-ignore
    const property = await this.propertyRepository.findAll();
    return property;
  }
}