import { EntityAddressRepositoryImpl } from '@core/infrastructure/repositories/entity-addresses-repository';
import { EntityAddressesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/entityAddresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class EntityAddressesDeleteUsecase {
  private entityAddressRepository: EntityAddressRepositoryImpl;

  constructor({
    entityAddressRepository,
  }: {
    entityAddressRepository: EntityAddressRepositoryImpl;
  }) {
    this.entityAddressRepository = entityAddressRepository;
  }

  async execute(data: z.infer<typeof EntityAddressesDeleteSchema>) {
    // @ts-ignore
    const entityAddress = await this.entityAddressRepository.delete(data.id!);
    return entityAddress;
  }
}