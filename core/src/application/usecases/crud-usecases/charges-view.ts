import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { ChargesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/charges.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargesViewUsecase {
  private chargeRepository: ChargeRepositoryImpl;

  constructor({
    chargeRepository,
  }: {
    chargeRepository: ChargeRepositoryImpl;
  }) {
    this.chargeRepository = chargeRepository;
  }

  async execute(data: z.infer<typeof ChargesViewSchema>) {
    // @ts-ignore
    const charge = await this.chargeRepository.findOrThrow(data);
    return charge;
  }
}