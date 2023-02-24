import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { PropertiesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/properties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertiesUpdateUsecase {
  private propertyRepository: PropertyRepositoryImpl;

  constructor({
    propertyRepository,
  }: {
    propertyRepository: PropertyRepositoryImpl;
  }) {
    this.propertyRepository = propertyRepository;
  }

  async execute(data: z.infer<typeof PropertiesUpdateSchema>) {
    // @ts-ignore
    const property = await this.propertyRepository.update(data.id!, data);;
    return property;
  }
}