import { CreatePropertyReqDto } from '@core/adapter/dtos/owner/properties.controller.dto';
import { OwnersRepositoryImpl } from '@core/infrastructure/repositories/ownersRepository';
import { PropertiesRepositoryImpl } from '@core/infrastructure/repositories/propertiesRepository';
import { z } from 'nestjs-zod/z';

export class PropertiesCreateUsecase {
  private propertiesRepositoryImpl: PropertiesRepositoryImpl;
  private ownersRepositoryImpl: OwnersRepositoryImpl;
  constructor({
    ownersRepositoryImpl,
    propertiesRepositoryImpl,
  }: {
    propertiesRepositoryImpl: PropertiesRepositoryImpl;
    ownersRepositoryImpl: OwnersRepositoryImpl;
  }) {
    this.propertiesRepositoryImpl = propertiesRepositoryImpl;
  }
  async execute(data: CreatePropertyReqDto) {
    console.log('RentalsCreateUsecase');

    const createdProperty = await this.propertiesRepositoryImpl.create(data);

    // await this.ownersRepositoryImpl.create({
    //   propertyId: createdProperty.id!,
    //   userId:
    // });
  }
}
