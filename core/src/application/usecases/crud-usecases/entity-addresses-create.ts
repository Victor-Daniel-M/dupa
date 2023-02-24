import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
import { EntityAddressesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/entityAddresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class EntityAddressesCreateUsecase {
  private entityAddressRepository: EntityAddressRepositoryImpl;

  constructor({
    entityAddressRepository,
  }: {
    entityAddressRepository: EntityAddressRepositoryImpl;
  }) {
    this.entityAddressRepository = entityAddressRepository;
  }

  async execute(data: z.infer<typeof EntityAddressesCreateSchema>) {
    // @ts-ignore
    const entityAddress = await this.entityAddressRepository.createOrThrow(data, 'id');
    return entityAddress;
  }
}