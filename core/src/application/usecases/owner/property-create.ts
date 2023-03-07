import { CreatePropertyReq } from '@core/adapter/dtos/owner/properties.controller.dto';
import { PropertiesRepositoryImpl } from '@core/infrastructure/repositories/propertiesRepository';
import { z } from 'nestjs-zod/z';

export class PropertiesCreateUsecase {
  private propertiesRepositoryImpl: PropertiesRepositoryImpl;
  constructor({
    propertiesRepositoryImpl,
  }: {
    propertiesRepositoryImpl: PropertiesRepositoryImpl;
  }) {
    this.propertiesRepositoryImpl = propertiesRepositoryImpl;
  }
  async execute(data: z.infer<typeof CreatePropertyReq>) {
    console.log('RentalsCreateUsecase');

    this.propertiesRepositoryImpl.create(data);
  }
}
