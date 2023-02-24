import { ChargeRepositoryImpl } from '@core/infrastructure/repositories/charges-repository';
import { ChargesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/charges.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargesDeleteUsecase {
  private chargeRepository: ChargeRepositoryImpl;

  constructor({
    chargeRepository,
  }: {
    chargeRepository: ChargeRepositoryImpl;
  }) {
    this.chargeRepository = chargeRepository;
  }

  async execute(data: z.infer<typeof ChargesDeleteSchema>) {
    // @ts-ignore
    const charge = await this.chargeRepository.delete(data.id!);
    return charge;
  }
}