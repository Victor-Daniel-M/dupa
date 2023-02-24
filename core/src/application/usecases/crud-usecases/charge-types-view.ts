import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
import { ChargeTypesViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/chargeTypes.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargeTypesViewUsecase {
  private chargeTypeRepository: ChargeTypeRepositoryImpl;

  constructor({
    chargeTypeRepository,
  }: {
    chargeTypeRepository: ChargeTypeRepositoryImpl;
  }) {
    this.chargeTypeRepository = chargeTypeRepository;
  }

  async execute(data: z.infer<typeof ChargeTypesViewSchema>) {
    // @ts-ignore
    const chargeType = await this.chargeTypeRepository.findOrThrow(data);
    return chargeType;
  }
}