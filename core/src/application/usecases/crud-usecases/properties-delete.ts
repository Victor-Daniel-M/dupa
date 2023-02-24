import { PropertyRepositoryImpl } from '@core/infrastructure/repositories/properties-repository';
import { PropertiesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/properties.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class PropertiesDeleteUsecase {
  private propertyRepository: PropertyRepositoryImpl;

  constructor({
    propertyRepository,
  }: {
    propertyRepository: PropertyRepositoryImpl;
  }) {
    this.propertyRepository = propertyRepository;
  }

  async execute(data: z.infer<typeof PropertiesDeleteSchema>) {
    // @ts-ignore
    const property = await this.propertyRepository.delete(data.id!);
    return property;
  }
}