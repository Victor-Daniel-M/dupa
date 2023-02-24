import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
import { EntityAddressesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/entityAddresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class EntityAddressesViewUsecase {
  private entityAddressRepository: EntityAddressRepositoryImpl;

  constructor({
    entityAddressRepository,
  }: {
    entityAddressRepository: EntityAddressRepositoryImpl;
  }) {
    this.entityAddressRepository = entityAddressRepository;
  }

  async execute(data: z.infer<typeof EntityAddressesViewSchema>) {
    // @ts-ignore
    const entityAddress = await this.entityAddressRepository.findOrThrow(data);
    return entityAddress;
  }
}