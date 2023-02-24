import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { AddressesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/addresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AddressesCreateUsecase {
  private addressRepository: AddressRepositoryImpl;

  constructor({
    addressRepository,
  }: {
    addressRepository: AddressRepositoryImpl;
  }) {
    this.addressRepository = addressRepository;
  }

  async execute(data: z.infer<typeof AddressesCreateSchema>) {
    // @ts-ignore
    const address = await this.addressRepository.createOrThrow(data, 'id');
    return address;
  }
}