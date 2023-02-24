import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
import { ChargeTypesGetSchema } from '@core/adapter/controllers/dtos/crud-dtos/chargeTypes.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargeTypesGetUsecase {
  private chargeTypeRepository: ChargeTypeRepositoryImpl;

  constructor({
    chargeTypeRepository,
  }: {
    chargeTypeRepository: ChargeTypeRepositoryImpl;
  }) {
    this.chargeTypeRepository = chargeTypeRepository;
  }

  async execute(data: z.infer<typeof ChargeTypesGetSchema>) {
    // @ts-ignore
    const chargeType = await this.chargeTypeRepository.findAll();
    return chargeType;
  }
}