import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { AddressesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/addresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AddressesGetUsecase {
  private addressRepository: AddressRepositoryImpl;

  constructor({
    addressRepository,
  }: {
    addressRepository: AddressRepositoryImpl;
  }) {
    this.addressRepository = addressRepository;
  }

  async execute(data: z.infer<typeof AddressesGetSchema>) {
    // @ts-ignore
    const address = await this.addressRepository.findAll();
    return address;
  }
}