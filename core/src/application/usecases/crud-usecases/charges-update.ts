import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { ChargesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/charges.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargesUpdateUsecase {
  private chargeRepository: ChargeRepositoryImpl;

  constructor({
    chargeRepository,
  }: {
    chargeRepository: ChargeRepositoryImpl;
  }) {
    this.chargeRepository = chargeRepository;
  }

  async execute(data: z.infer<typeof ChargesUpdateSchema>) {
    // @ts-ignore
    const charge = await this.chargeRepository.update(data.id!, data);;
    return charge;
  }
}