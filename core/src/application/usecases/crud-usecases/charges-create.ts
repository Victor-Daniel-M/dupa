import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { ChargesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/charges.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargesCreateUsecase {
  private chargeRepository: ChargeRepositoryImpl;

  constructor({
    chargeRepository,
  }: {
    chargeRepository: ChargeRepositoryImpl;
  }) {
    this.chargeRepository = chargeRepository;
  }

  async execute(data: z.infer<typeof ChargesCreateSchema>) {
    // @ts-ignore
    const charge = await this.chargeRepository.createOrThrow(data, 'id');
    return charge;
  }
}