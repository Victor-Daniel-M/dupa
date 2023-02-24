import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
import { EntityAddressesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/entityAddresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class EntityAddressesUpdateUsecase {
  private entityAddressRepository: EntityAddressRepositoryImpl;

  constructor({
    entityAddressRepository,
  }: {
    entityAddressRepository: EntityAddressRepositoryImpl;
  }) {
    this.entityAddressRepository = entityAddressRepository;
  }

  async execute(data: z.infer<typeof EntityAddressesUpdateSchema>) {
    // @ts-ignore
    const entityAddress = await this.entityAddressRepository.update(data.id!, data);;
    return entityAddress;
  }
}