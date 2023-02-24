import { AddressRepositoryImpl } from '@core/infrastructure/repositories/addresses-repository';
import { AddressesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/addresses.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class AddressesDeleteUsecase {
  private addressRepository: AddressRepositoryImpl;

  constructor({
    addressRepository,
  }: {
    addressRepository: AddressRepositoryImpl;
  }) {
    this.addressRepository = addressRepository;
  }

  async execute(data: z.infer<typeof AddressesDeleteSchema>) {
    // @ts-ignore
    const address = await this.addressRepository.delete(data.id!);
    return address;
  }
}