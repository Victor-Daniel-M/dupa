import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { ChargesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/charges.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargesGetUsecase {
  private chargeRepository: ChargeRepositoryImpl;

  constructor({
    chargeRepository,
  }: {
    chargeRepository: ChargeRepositoryImpl;
  }) {
    this.chargeRepository = chargeRepository;
  }

  async execute(data: z.infer<typeof ChargesGetSchema>) {
    // @ts-ignore
    const charge = await this.chargeRepository.findAll();
    return charge;
  }
}