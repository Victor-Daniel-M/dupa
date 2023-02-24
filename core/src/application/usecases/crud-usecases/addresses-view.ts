import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { AddressesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/addresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AddressesViewUsecase {
  private addressRepository: AddressRepositoryImpl;

  constructor({
    addressRepository,
  }: {
    addressRepository: AddressRepositoryImpl;
  }) {
    this.addressRepository = addressRepository;
  }

  async execute(data: z.infer<typeof AddressesViewSchema>) {
    // @ts-ignore
    const address = await this.addressRepository.findOrThrow(data);
    return address;
  }
}