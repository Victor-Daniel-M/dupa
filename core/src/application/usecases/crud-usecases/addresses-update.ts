import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { AddressesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/addresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AddressesUpdateUsecase {
  private addressRepository: AddressRepositoryImpl;

  constructor({
    addressRepository,
  }: {
    addressRepository: AddressRepositoryImpl;
  }) {
    this.addressRepository = addressRepository;
  }

  async execute(data: z.infer<typeof AddressesUpdateSchema>) {
    // @ts-ignore
    const address = await this.addressRepository.update(data.id!, data);;
    return address;
  }
}