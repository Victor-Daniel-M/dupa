import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
import { EntityAddressesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/entityAddresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class EntityAddressesGetUsecase {
  private entityAddressRepository: EntityAddressRepositoryImpl;

  constructor({
    entityAddressRepository,
  }: {
    entityAddressRepository: EntityAddressRepositoryImpl;
  }) {
    this.entityAddressRepository = entityAddressRepository;
  }

  async execute(data: z.infer<typeof EntityAddressesGetSchema>) {
    // @ts-ignore
    const entityAddress = await this.entityAddressRepository.findAll();
    return entityAddress;
  }
}